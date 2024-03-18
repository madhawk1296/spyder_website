import kanit from "@/fonts/kanit";

export default function FeatureTab({ title, subtitle, selected=false }: {title: string, subtitle: string, selected?: boolean}) {
    return (
        <button className={`w-[300px] h-[105px] border-2 shadow rounded-lg py-[10px] px-[15px] flex flex-col gap-1 ${selected && "bg-gray-200"}`}>
            <h1 className={`${kanit.semiBold} text-xl tracking-wide text-gray-800`}>{title}</h1>
            <h1 className={`${kanit.medium} text tracking-wide text-gray-700 w-full text-left`}>{subtitle}</h1>
        </button>
    )
}