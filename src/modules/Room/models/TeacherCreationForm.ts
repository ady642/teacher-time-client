export default class RoomStatsQuery {
    duration: number;
    teacher: string;
    date: string;
    student: string;

    constructor(payload: { duration: number; teacher: string; date: string; student: string;}) {
    	this.duration = payload.duration;
    	this.teacher = payload.teacher;
    	this.date = payload.date;
    	this.student = payload.student;
    }

    transformForAPI() {
    	return this
    }
}
