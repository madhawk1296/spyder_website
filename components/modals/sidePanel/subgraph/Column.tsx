import ColumnCheck from "./ColumnCheck";
import ColumnInput from "./ColumnInput";
import ColumnSelect from "./ColumnSelect";
import { ColumnType } from "./CreateCollectionModal";
import Cancel from "../../../icons/Cancel"
import DeleteButton from "./DeleteButton";

export default function Column({ index, column, changeColumn, deleteColumn }: { index: number, column: ColumnType, changeColumn: (index: number, column: ColumnType) => void, deleteColumn: (index: number) => void }) {
    const { name, type, defaultValue, primary }= column

    const types = [
        { 
            name: ""
        },
        { 
            name: "int2",
        },
        { 
            name: "int4",
        },
        { 
            name: "int8",
        },
        { 
            name: "float4",
        },
        { 
            name: "float8",
        },
        { 
            name: "json",
        },
        { 
            name: "jsonb",
        },
        { 
            name: "text",
        },
        { 
            name: "varchar",
        },
        { 
            name: "uuid",
        },
        { 
            name: "date",
        },
        { 
            name: "time",
        },
        { 
            name: "timetz",
        },
        { 
            name: "timestamptz",
        },
        { 
            name: "bool",
        }
    ]

    const changeName = (value: string) => {
        changeColumn(index, {...column, name: value})
    }

    const changeType = (value: string) => {
        changeColumn(index, {...column, type: value})
    }

    const changeDefaultValue = (value: string) => {
        changeColumn(index, {...column, defaultValue: value})
    }

    const togglePrimary = () => {
        changeColumn(index, {...column, primary: !primary})
    }

    const handleDelete = () => {
        deleteColumn(index)
    }

    return (
        <div className="flex items-center w-full gap-2">
            <ColumnInput value={name} placeholder="column_name" onChange={changeName} />
            <ColumnSelect value={type} options={types} onChange={changeType} />
            <ColumnInput value={defaultValue} placeholder="NULL" onChange={changeDefaultValue} />
            <ColumnCheck value={primary} onChange={togglePrimary} />
            <DeleteButton onClick={handleDelete} />
        </div>
    )
}