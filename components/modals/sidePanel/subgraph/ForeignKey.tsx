import { CollectionType } from "@/types/subgraph";
import ColumnCheck from "./ColumnCheck";
import ColumnInput from "./ColumnInput";
import ColumnSelect from "./ColumnSelect";
import { ColumnType, ForeignKeyType } from "./CreateCollectionModal";
import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function ForeignKey({ index, foreignKey, changeForeignKey, collections, deleteForeignKey }: { index: number, foreignKey: ForeignKeyType, changeForeignKey: (index: number, column: ForeignKeyType) => void, collections: CollectionType[], deleteForeignKey: (index: number) => void }) {
    const { name, collection, column }= foreignKey
    const columns = collections.find(cur =>  cur.name == collection)?.columns || []

    const changeName = (value: string) => {
        changeForeignKey(index, {...foreignKey, name: value})
    }

    const changeCollection = (value: string) => {
        changeForeignKey(index, {...foreignKey, collection: value})
    }

    const changeColumn = (value: string) => {
        const selectedColumn = columns.find(column => column.name === value )!
        changeForeignKey(index, {...foreignKey, column: value, dataType: selectedColumn.data_type })
    }

    const handleDelete = () => {
        deleteForeignKey(index)
    }

    return (
        <div className="flex items-center w-full gap-2">
            <ColumnInput value={name} placeholder="column_name" onChange={changeName} />
            <ColumnSelect value={collection} options={collections} onChange={changeCollection} />
            <ColumnSelect value={column} options={columns} onChange={changeColumn} />
            <DeleteButton onClick={handleDelete} />
        </div>
    )
}