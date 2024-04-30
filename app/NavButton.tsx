export default function NavButton({ title, onClick }: { title: string, onClick: () => void }) {
    return (
        <button onClick={onClick} className="text-xl tracking-wide text-gray-700">{title}</button>
    )
}