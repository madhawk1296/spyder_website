import Arrow from "@/components/icons/Arrow";

export default function PageButton({ onClick, backwards=false }: { onClick: () => void, backwards?: boolean}) {
    

    return (
        <button onClick={onClick} className="h-[25px] px-[5px] py-[3px] rounded shadow border-2">
            <Arrow backwards={backwards} />
        </button>
    )
}