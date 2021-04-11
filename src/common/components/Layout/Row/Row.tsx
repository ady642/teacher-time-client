import {FunctionComponent, ReactNode} from "react";
import {Stack} from "@material-ui/core";

interface RowProps {
    children: ReactNode
}

const Row: FunctionComponent<RowProps> = ({ children }) => {
    return <Stack direction={'row'}>
        { children }
    </Stack>
}

export default Row
