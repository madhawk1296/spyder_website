export default function ColumnCheck({ value, onChange }: { value: boolean, onChange: () => void}) {
    return (
        <div className="">
            <input type="checkbox" checked={value} onChange={onChange} />
        </div>
    )
}