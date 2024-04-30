import { CollectionType } from "@/types/subgraph";
import ColumnTitle from "./ColumnTitle";
import { ForeignKeyType } from "./CreateCollectionModal";
import ForeignKey from "./ForeignKey";

export default function ForeignKeys({ foreignKeys, addForeignKey, changeForeignKey, collections, deleteForeignKey }: { foreignKeys: ForeignKeyType[], addForeignKey: () => void, changeForeignKey: (index: number, foreignKey: ForeignKeyType) => void, collections: CollectionType[], deleteForeignKey: (index: number) => void }) {
    return (
        <div className="flex flex-col w-full p-[20px] gap-3 w-full ">
            <div className="flex items-center w-full">
                <h1 className="font-medium tracking-wide text-gray-800">Foreign Keys</h1>
            </div>
            <div className="flex items-center w-full gap-2">
                <ColumnTitle title="Name" />
                <ColumnTitle title="Collection" />
                <ColumnTitle title="Collumn" />
            </div>
            <div className="flex flex-col w-full relative gap-2">
                {foreignKeys.map((foreignKey, index) => <ForeignKey key={index} index={index} foreignKey={foreignKey} changeForeignKey={changeForeignKey} collections={collections} deleteForeignKey={deleteForeignKey} />)}
            </div>
            <button onClick={addForeignKey} type="button" className="w-fit px-[10px] py-[5px] border-2 shadow text-xs rounded-lg shadow" >Add Foreign Key</button>
        </div>
    )
}