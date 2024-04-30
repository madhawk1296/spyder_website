import Cancel from "@/components/icons/Cancel";

export default function DeleteButton({ onClick }: { onClick: () => void}) {
    return (
        <button onClick={onClick} className="ml-[50px] h-[17px] justify-self-end">
            <Cancel />
        </button>
    )
}