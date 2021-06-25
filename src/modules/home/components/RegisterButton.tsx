import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import React, {FC} from 'react'


interface RegisterButtonProps {
    locale: string;
    dark?: boolean;
}

const RegisterButton: FC<RegisterButtonProps> = ({ locale, dark = false }) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()



	const goToContact = async () => {
		await goTo(locale, 'contact')
	}
    



	

	return (
		
			
				
                    <button onClick={goToContact} style= {{width:'20vw', marginTop:'4.5vw', fontSize:'1.2vw', marginRight:'1vw'}} className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white font-medium   md:px-4 md:p-2 p-1`}>
					    { t('common.teachers') }
				    </button>
		
			
		
	)
}

export default  RegisterButton