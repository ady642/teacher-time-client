import {FunctionComponent} from "react";
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import useTranslation from "@/common/hooks/useTranslation";

interface SignOutButtonProps {
    onClick: () => void
}

const SignOutButton: FunctionComponent<SignOutButtonProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <SimpleButton color={'secondary'} variant={'outlined'} text={t('common.logout')} onClick={onClick} />
}

export default SignOutButton
