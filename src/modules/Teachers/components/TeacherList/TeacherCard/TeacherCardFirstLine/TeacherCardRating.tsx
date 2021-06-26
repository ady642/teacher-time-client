import {FunctionComponent} from "react";
import {Rating} from "@material-ui/lab";

interface TeacherCardRatingProps {
    rating: number;
}

const TeacherCardRating: FunctionComponent<TeacherCardRatingProps> = ({ rating }) => {
	return <Rating className={'text-orange'} value={rating} readOnly />
}

export default TeacherCardRating
