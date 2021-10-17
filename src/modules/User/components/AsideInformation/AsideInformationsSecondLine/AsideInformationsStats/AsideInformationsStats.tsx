import {FunctionComponent} from "react";
import AsideInformationsStat
	from "@/modules/User/components/AsideInformation/AsideInformationsSecondLine/AsideInformationsStats/AsideInformationsStat";
import VerticalDivider from "@/common/components/Dividers/VerticalDivider";

interface AsideInformationsStatsProps {

}

const AsideInformationsStats: FunctionComponent<AsideInformationsStatsProps> = () => {
	const stats = [
		{ title: 'Sessions', value: 0 },
		{ title: 'Heures', value: 0 },
		{ title: 'Gagnés', value: 0 },
	]

	return <div className={'flex'}>
		{ stats.map((stat, index) => {
			return (
				<>
					<AsideInformationsStat
						key={stat.title} title={stat.title} value={stat.value}
					/>
					{ index < (stats.length - 1) && <VerticalDivider /> }
				</>
			)
		})
		}
	</div>
}

export default AsideInformationsStats
