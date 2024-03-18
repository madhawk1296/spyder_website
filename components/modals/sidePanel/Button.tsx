export default function Button({ title, onClick, color="red", isSubmit=false }: { title: string, onClick?: () => void, color?: string, isSubmit?: boolean}) {

    return (
        <button type={isSubmit ? "submit" : "button"} onClick={onClick} className={`px-[15px] py-[10px] rounded-xl h-fit smoothe shadow hover:shadow-md tracking-wide text-xs font-semibold border-2 ${color == "red" ? "text-gray-50 bg-red-500 border-red-300 hover:bg-red-600" : "text-gray-800 bg-white hover:bg-gray-100"}`}>{title}</button>
    )
}