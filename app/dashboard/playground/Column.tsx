export default function Column({ column }: { column: string }) {
    return (
        <h1 className=""><span className="text-purple-600">{column}</span>: <span className="text-gray-500">String</span></h1>
    )
}