export default function Detail({ title, value }: { title: string, value: string }) {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-sm text-gray-800 font-medium tracking-wide">{title}</h1>
            <h1 className={`text-sm px-[10px] rounded-lg text-gray-800 font-medium tracking-wide `}>{value}</h1>
        </div>
    )
}