const translations: Record<string, any>= {
	form: {
		creation: {
			title: 'the title'
		}
	}
}

const resolvePath = (object: Record<string, any>, path: string, defaultValue = '') => path
	.split('.')
	.reduce((o, p) => o ? o[p] : defaultValue, object)

it('should return the title', () => {
	expect(resolvePath(translations, 'form.creation.title')).toBe('the title')
})
