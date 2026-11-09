import hexadrop from '@hexadrop/eslint-config';

export default hexadrop(
	{
		ignores: ['storybook/storybook-static/**'],
		typescript: ['./tsconfig.json', './storybook/tsconfig.json'],
	},
	{
		files: ['storybook/src/stories/**/*'],
		rules: {
			'import-sort/exports': 'off',
		},
	},
	{
		files: ['components/**/src/**/variants.ts', 'components/**/src/**/*.variants.ts'],
		rules: {
			'import/no-named-as-default': 'off',
			'perfectionist/sort-objects': 'off',
		},
	},
	{
		files: ['components/**/*.astro'],
		rules: {
			'import/no-unresolved': 'off',
		},
	},
	{
		files: ['**/README.md/*'],
		rules: {
			'import/no-extraneous-dependencies': 'off',
		},
	},
	{
		files: ['components/navigation-menu/README.md/*'],
		rules: {
			'format/prettier': 'off',
			'style/indent': 'off',
		},
	}
);
