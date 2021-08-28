export type StepperProps = {
    step: number,
    setStep: (step: number) => void
}

export enum Step {
    FIELD,
    DESCRIPTION,
    NIVEAU,
    HOURLY_RATE,
    DIPLOMA
}
