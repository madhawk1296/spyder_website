export default function Action({ action }: { action: string}) {
    return (
        <button className="w-full py-[10px] text-xs tracking-wide text-gray-800 font-medium px-[10px] bg-white smoothe-fast hover:bg-gray-100">
            {action}
        </button>
    )
}