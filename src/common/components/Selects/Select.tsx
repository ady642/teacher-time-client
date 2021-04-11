import {FunctionComponent} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

interface SelectProps {
    value: any
    handleChange: Function
}

const PESelect: FunctionComponent<SelectProps> = ({ value, handleChange}) => {
    return <FormControl variant="outlined" size={'small'}>
            <InputLabel id="matiere-label">Matière</InputLabel>
            <Select
                labelId="matiere-label"
                value={value}
                onChange={() => handleChange()}
                label="Matière"
                margin="dense"
            >
                <MenuItem value={'Espagnol'}>Espagnol</MenuItem>
                <MenuItem value={'Maths'}>Maths</MenuItem>
                <MenuItem value={'SVT'}>SVT</MenuItem>
            </Select>
        </FormControl>
}

export default PESelect
