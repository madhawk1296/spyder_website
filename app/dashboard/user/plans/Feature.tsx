import Check from "@/components/icons/Check";
import kanit from "@/fonts/kanit";

export default function Feature({ title }: { title: string}) {
    return (
        <div className="flex items-center gap-1">
        <div className="h-[20px]">
            <Check />
        </div>
        <h1 className={`text-lg ${kanit.light} tracking-wide text-gray-700`}>{title}</h1>
    </div>
    )
}