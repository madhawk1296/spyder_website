import kanit from "@/fonts/kanit";

export default function AccountOption({ handleClick, title }: { handleClick?: () => void, title: string }) {
    return (
        <button onClick={handleClick} className={`w-full h-fit py-[10px] bg-white hover:bg-gray-100 cursor-pointer ${kanit.semiBold} tracking-wide text-gray-700 text-xs`}>{title}</button>
    )
}