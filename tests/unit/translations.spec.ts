import useTranslation from "@/common/hooks/useTranslation";

const translations: Record<string, any>= {
	fr: {
		form: {
			creation: {
				title: 'the title',
				banner: 'Vous m\'avez parlé $count fois ce mois de $month'
			}
		}
	}
}

jest.mock('@/locales', () => translations)
jest.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'fr'
	})
}))

const { t } = useTranslation()

it('should return the title', () => {
	expect(t('form.creation.title')).toBe('the title')
})

it('should return the translation with parameters', () => {
	expect(t('form.creation.banner', { count: 27, month: 'Mai' })).toBe('Vous m\'avez parlé 27 fois ce mois de Mai')
})
