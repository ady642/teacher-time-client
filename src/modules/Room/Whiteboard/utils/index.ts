import { throttle } from 'throttle-typescript';

const myThrottle = (callback: () => void, delay: number) => throttle(callback, delay)

export default myThrottle
