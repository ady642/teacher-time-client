import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function useTranslation() {
	const { localization } = useContext(LanguageContext);
	function t(key: string): string {

		// @ts-ignore
		const translation = localization.translations[key] || localization.translations.common[key.split('.')[1]] || "";

		if (!translation) {
			console.warn(
				`Translation '${key}' for locale '${localization.locale}' not found.`
			);
		}

		return translation
	}

	return {
		t,
		locale: localization.locale,
	};
}
