import {MutableRefObject, useEffect} from "react";

const useOutsideClick = (refs: MutableRefObject<HTMLElement>[], callback: Function) => {
	const handleClick = (e: any) => {
		const clickOnRefs = refs.some((ref: MutableRefObject<HTMLElement>) => ref.current.contains(e.target))

		if (!clickOnRefs) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
};

export default useOutsideClick;
