export default function Button({ title }: { title: string}) {
    return (
        <button className="py-[15px] bg-red-500 rounded-xl shadow-md text-gray-50 font-bold tracking-wide smoothe hover:shadow-lg hover:bg-red-600">{title}</button>
    )
}