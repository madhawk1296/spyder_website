'use server'

import { defaultPgClient, pgClient } from "@/clients/pg";
import { supabaseServerClient } from "@/clients/supabase";
import { ColumnType, ForeignKeyType } from "@/components/modals/sidePanel/subgraph/CreateCollectionModal";
import { SubgraphType } from "@/types/subgraph";

export async function getSchemas(userId: string) {
    const defaultSchemas = ['pg_toast', 'pg_catalog', 'information_schema', 'public', 'graphql']

    const pg = pgClient(userId)
    await pg.connect();

    const schemas = (await pg.query("SELECT schema_name FROM information_schema.schemata;")).rows;

    await pg.end()

    return schemas.filter(schema => !defaultSchemas.includes(schema.schema_name) )
}

export async function createSchema(userId: string, name: string): Promise<{ error: string | null }> {
    const pg = pgClient(userId)
    await pg.connect();

    try {
        await pg.query(`CREATE SCHEMA ${name}`)

        return {
            error: null
        }
    } catch (e: any) {
        return {
            error: e.message
        }
    } finally {
        await pg.end()
    }
}

export async function getTables(userId: string, name: string): Promise<{table_name: string}[]> {
    const pg = pgClient(userId)
    await pg.connect();

    const tables = (await pg.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = '${name}';
    `)).rows;

    await pg.end()

    return tables
}

export async function addTable(userId: string, schema: string, name: string, columns: ColumnType[]): Promise<{error: string | null}> {
    const pg = pgClient(userId)
    await pg.connect();

    // Construct the columns part of the SQL query
    const columnDefinitions = columns.map(column => {
        let columnDef = `"${column.name}" ${column.type.toUpperCase()}`;
        if (column.defaultValue) {
            // Adjust for potential string values
            const defaultValue = isNaN(Number(column.defaultValue)) ? `'${column.defaultValue}'` : column.defaultValue;
            columnDef += ` DEFAULT ${defaultValue}`;        }
        if (column.primary) {
            columnDef += ' PRIMARY KEY';
        }
        return columnDef;
    }).join(', ');
    
    try {
        await pg.query(`CREATE TABLE ${schema}.${name} (${columnDefinitions})`);
        
        return {
            error: null
        }
    } catch (e: any) {
        console.log(e)

        return {
            error: e.message
        }
    } finally {
        await pg.end()
    }
}

export async function getColumns(userId: string, schema: string, table: string): Promise<{ column_name: string, data_type: string }[]> {
    const pg = pgClient(userId)
    await pg.connect();

    const columns = (await pg.query(`SELECT column_name, data_type 
    FROM information_schema.columns 
    WHERE table_schema = '${schema}' AND table_name = '${table}';
    `)).rows;

    await pg.end()

    return columns
}

export async function getRows(userId: string, schema: string, table: string, page: number): Promise<{ column_name: string }[]> {
    const pg = pgClient(userId)
    await pg.connect();

    const rows = (await pg.query(`SELECT * FROM "${schema}"."${table}" LIMIT 100 OFFSET ${(page - 1) * 100};`)).rows;

    await pg.end()

    return rows
}

export async function getRowCount(userId: string, schema: string, table: string): Promise<number> {
    const pg = pgClient(userId)
    await pg.connect();

    const totalCount = (await pg.query(`SELECT COUNT(*) FROM "${schema}"."${table}";`)).rows[0].count as number

    await pg.end()

    return totalCount
} 

export async function getSubgraphs(userId: string): Promise<SubgraphType[]> {
    const schemas = await getSchemas(userId)
    return await Promise.all(schemas.map(async schema => await getSubgraph(userId, schema.schema_name)))
}

export async function getSubgraph(userId: string, schema_name: string): Promise<SubgraphType> {
    const tables = await getTables(userId, schema_name)
    const collections = await Promise.all(tables.map(async table => {
        const { table_name } = table
        const columns = (await getColumns(userId, schema_name, table_name)).map(column => {return {name: column.column_name, data_type: column.data_type}})

        return {
            name: table_name,
            columns
        }
    }))


    return {
        name: schema_name,
        collections
    }
}

export async function CreateDatabase(userId: string) {
    const pg = defaultPgClient()
    await pg.connect();

    await pg.query(`CREATE DATABASE "${userId}"`)

    await pg.end()
}