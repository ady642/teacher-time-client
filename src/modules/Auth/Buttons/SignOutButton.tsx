import {FunctionComponent} from "react";
import SimpleButton from "@/common/components/Buttons/SimpleButton";

interface SignOutButtonProps {
    onClick: () => void
}

const SignOutButton: FunctionComponent<SignOutButtonProps> = ({ onClick }) => {
    return <SimpleButton color={'secondary'} variant={'outlined'} text={'Sign Out'} onClick={onClick} />
}

export default SignOutButton
