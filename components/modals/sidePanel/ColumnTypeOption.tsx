export default function ColumnTypeOption({ option }: { option: { name: string}}) {
    return (
        <option>{option.name}</option>
    )
}