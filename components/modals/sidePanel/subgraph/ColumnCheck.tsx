export default function ColumnCheck({ value, onChange }: { value: boolean, onChange: () => void}) {
    return (
        <div className="min-w-[25%]">
            <input type="checkbox" checked={value} onChange={onChange} />
        </div>
    )
}