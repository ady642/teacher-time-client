export interface RoomUsers {
    teacherID: string,
    studentID: string
}

export interface OfferIcePayload {
    target: string,
    candidate: RTCIceCandidateInit,
}

type RTCSdpType = "answer" | "offer" | "pranswer" | "rollback";
export interface RTCSessionDescriptionInit {
    sdp?: string;
    type?: RTCSdpType;
}

export interface RTCPayload {
    target: string,
    caller: string,
    sdp: RTCSessionDescription
}

export interface RTCIceCandidateInit {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    usernameFragment?: string | null;
}
