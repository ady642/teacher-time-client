export type StepperProps = {
    step: number,
    setStep: (step: number) => void
}

export enum Step {
    FIELD = 1,
    DESCRIPTION= 2,
    LEVEL=3,
    HOURLY_RATE = 4,
    DIPLOMA = 5
}
