import { LinearProgress } from "@mui/material";

export default function Progress({ value }: { value: number}) {
    return (
        <LinearProgress variant="determinate" value={value} />
    )
}