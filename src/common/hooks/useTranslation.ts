import locales from "@/locales"
import {useRouter} from "next/router";

export const resolvePath = (object: Record<string, any>, path: string, defaultValue = '') => path
	.split('.')
	.reduce((o, p) => o ? o[p] : defaultValue, object)

export default function useTranslation() {
	const { locale } = useRouter();
	function t(key: string, args?: Record<string, string|number>): string {

		let translation = resolvePath(locales[locale], key) || locales[locale].common[key.split('.')[1]];

		if(args) {
			const argsKeys = Object.keys(args)

			argsKeys.forEach((argKey) => {
				const regex = new RegExp(`\\$${argKey}`, "g");

				translation = translation.replace(regex, args[argKey]);
			})

		}

		if (!translation) {
			console.warn(
				`Translation '${key}' for locale '${locale}' not found.`
			);
		}

		return translation
	}

	return {
		t,
	};
}
