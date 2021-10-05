import User from "@/modules/Auth/types/User";

export interface Teacher {
    _id: string;
    user: User;
    fields: string[];
    description: string;
    levels: string[];
    hourlyRate: number;
}
