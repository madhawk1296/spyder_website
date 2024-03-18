export default function ButtonOption({ title }: { title: string}) {
    return (
        <option className="text-[8px] font-semibold tracking-wide text-gray-800 text-center" >{title}</option>
    )
}