import {FunctionComponent} from "react";
import {Rating} from "@material-ui/lab";

interface AsideInformationsRatingProps {
    rating?: number;
}

const AsideInformationsRating: FunctionComponent<AsideInformationsRatingProps> = ({ rating = 5 }) => {
	return <Rating className={'text-yellow'} value={rating} size={'large'} readOnly />
}

export default AsideInformationsRating
