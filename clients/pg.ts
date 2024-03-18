import { Client } from "pg";

export function defaultPgClient() {
    return new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: Number(process.env.PGPORT),
        ssl: true,
    });
}

export function pgClient(database: string) {
    return new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: database,
        password: process.env.PGPASSWORD,
        port: Number(process.env.PGPORT),
        ssl: true,
    });
}