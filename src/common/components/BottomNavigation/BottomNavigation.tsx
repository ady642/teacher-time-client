import {FunctionComponent, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const BottomBar: FunctionComponent = () => {
    const [value, setValue] = useState(0)

    return <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        color={'primary'}
        className={'flex sm:hidden fixed bottom-0 z-50 w-full'}
    >
        <BottomNavigationAction label="Professeurs" icon={<AccountCircle />} />
        <BottomNavigationAction label="Mon compte" icon={<AccountCircle />} />
    </BottomNavigation>
}

export default BottomBar
