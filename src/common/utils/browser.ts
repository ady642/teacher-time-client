const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const smoothScroll = function(elementId: string) {
	const MIN_PIXELS_PER_STEP = 16;
	const MAX_SCROLL_STEPS = 30;
	const target: any = document.getElementById(elementId);
	let scrollContainer: any = target;
	do {
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	let targetY = 0;
	do {
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while (target == target.offsetParent);

	const pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
		(targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

	let iterations = 0;
	const stepFunc = function() {
		if(iterations > MAX_SCROLL_STEPS){
			return;
		}
		scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

		if (scrollContainer.scrollTop >= targetY) {
			return;
		}

		window.requestAnimationFrame(stepFunc);
	};

	window.requestAnimationFrame(stepFunc);
}

export { isFirefox, smoothScroll }
