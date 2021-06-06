import {FunctionComponent} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

interface SelectProps {
    value: any;
    handleChange: Function;
    disabled?: boolean;
    label: string;
    items: Array<{value: any, label: string}>;
	disabledItems: string[];
}

const PESelect: FunctionComponent<SelectProps> = ({ value,disabledItems, handleChange, label, disabled = false, items}) => {
	return <FormControl variant="outlined" size={'small'}>
		<InputLabel id={label}>{label}</InputLabel>
		<Select
			disabled={disabled}
			labelId={label}
			value={value}
			onChange={(e) => handleChange(e.target.value)}
			label={label}
			margin="dense"
		>
			{items.map((item: any) => <MenuItem disabled={disabledItems.includes(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>)}
		</Select>
	</FormControl>
}

export default PESelect
