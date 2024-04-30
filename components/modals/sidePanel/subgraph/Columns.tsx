import Column from "./Column";
import ColumnTitle from "./ColumnTitle";
import { ColumnType } from "./CreateCollectionModal";

export default function Columns({ columns, addColumn, changeColumn, deleteColumn }: { columns: ColumnType[], addColumn: () => void, changeColumn: (index: number, column: ColumnType) => void, deleteColumn: (index: number) => void }) {
    return (
        <div className="flex flex-col w-full p-[20px] gap-3 w-full ">
            <div className="flex items-center w-full">
                <h1 className="font-medium tracking-wide text-gray-800">Columns</h1>
            </div>
            <div className="flex items-center w-full gap-2">
                <ColumnTitle title="Name" />
                <ColumnTitle title="Type" />
                <ColumnTitle title="Default Value" />
                <ColumnTitle title="Primary" />
            </div>
            <div className="flex flex-col w-full relative gap-2">
                {columns.map((column, index) => <Column key={index} index={index} column={column} changeColumn={changeColumn} deleteColumn={deleteColumn} />)}
            </div>
            <button onClick={addColumn} type="button" className="w-fit px-[10px] py-[5px] border-2 shadow text-xs rounded-lg shadow" >Add Column</button>
        </div>
    )
}