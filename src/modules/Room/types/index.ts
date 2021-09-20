import Teacher from "@/modules/Teachers/List/models/Teacher";

export interface RoomUsers {
    teacherID: string,
    studentID: string
}

export interface Room {
    id: string;
    teacher: Teacher;
    students: string[];
}

export interface OfferIcePayload {
    roomID: string,
    candidate: RTCIceCandidateInit,
}

type RTCSdpType = "answer" | "offer" | "pranswer" | "rollback";
export interface RTCSessionDescriptionInit {
    sdp?: string;
    type: RTCSdpType;
}

export interface RTCPayload {
    roomID: string,
    caller: string,
    sdp: RTCSessionDescription
}

export interface RTCIceCandidateInit {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    usernameFragment?: string | null;
}
