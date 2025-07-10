import { FormControl, InputLabel, Select, SelectProps } from "@mui/material";

export default function FECSelect(props: SelectProps) {


    return <FormControl>
        <InputLabel id="fec-select">{props.label}</InputLabel>
        <Select labelId="fec-select" size={'small'} {...props}>
            {
                props.children
            }
        </Select>
    </FormControl>

}