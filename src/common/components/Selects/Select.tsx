import {FunctionComponent} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

interface SelectProps {
    value: any
    handleChange: Function
    label: string
    items: Array<{value: any, label: string}>
}

const PESelect: FunctionComponent<SelectProps> = ({ value, handleChange, label, items}) => {
    return <FormControl variant="outlined" size={'small'}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                value={value}
                onChange={() => handleChange()}
                label={label}
                margin="dense"
            >
                {items.map((item: any) => <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>)}
            </Select>
        </FormControl>
}

export default PESelect
