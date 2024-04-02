export default function ColumnTitle({ title }: { title: string}) {
    return (
        <div className="min-w-[25%] flex items-center">
            <h1 className="text-sm text-gray-600 font-base tracking-wide">{title}</h1>
        </div>
    )
}