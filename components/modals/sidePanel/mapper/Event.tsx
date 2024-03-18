export default function Event({ index, event, toggleChooseEvent }: { index: number, event: {name: string, chosen: boolean}, toggleChooseEvent: (index: number) => void}) {
    const { name, chosen } = event

    const handleClick = () => {
        toggleChooseEvent(index)
    }

    return (
        <div className="w-full border-2 bg-gray-50 rounded-xl py-[10px] px-[15px] flex justify-between items-center">
            <h1 className="text-sm tracking-wide font-medium text-gray-800">{name}</h1>
            <input onChange={handleClick} type="checkbox" checked={chosen} />
        </div>
    )
}