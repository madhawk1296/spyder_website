export default function Input({ title, name, placeholder }: { title: string, name: string, placeholder: string }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h1 className="text-lg text-gray-700 font-semibold tracking-wide">{title}</h1>
            <input name={name} type="" className="w-full p-[10px] rounded-xl shadow-md text-gray-800 border-2 outline-gray-500 smoothe" placeholder={placeholder} />
        </div>
    )
}