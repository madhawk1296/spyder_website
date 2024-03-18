export default function Column({ index, column }: { index: number, column: {column_name: string}}) {
    const { column_name } = column

    return (
        <div className={`h-[30px] px-[15px] min-w-[100px] w-[200px] grid items-center justify-center bg-gray-200`}>
            <h1 className="font-semibold text-gray-800 tracking-wide text-xs">{column_name}</h1>
        </div>
    )
}