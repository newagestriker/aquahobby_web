import { Typography } from "@mui/material";

export interface INameValuePairProps {
    name: string;
    value: string;
}
export default function NameValuePair({ name, value }: INameValuePairProps) {
    return <>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{value}</Typography>
    </>
}