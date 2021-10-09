import locales from "@/locales"
import {useRouter} from "next/router";

const resolvePath = (object: Record<string, any>, path: string, defaultValue = '') => path
	.split('.')
	.reduce((o, p) => o ? o[p] : defaultValue, object)

export default function useTranslation() {
	const { locale } = useRouter();
	function t(key: string): string {

		const translation = resolvePath(locales[locale], key) || locales[locale].common[key.split('.')[1]];

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
