// limit the number of events per second
export function throttle(callback: any, delay: number) {
	let previousCall = new Date().getTime();
	return function() {
		let time = new Date().getTime();

		if ((time - previousCall) >= delay) {
			previousCall = time;
			callback.apply(null, arguments);
		}
	};
}
