import { default as hexadrop } from '@hexadrop/eslint-config';

export default hexadrop(
	{
		typescript: ['./tsconfig.json', './storybook/tsconfig.json'],
	},
	{
		files: ['storybook/src/stories/**/*'],
		rules: {
			'import-sort/exports': 'off',
		},
	},
	{
		files: ['components/**/src/**/variants.ts'],
		rules: {
			'import/no-named-as-default': 'off',
			'perfectionist/sort-objects': 'off',
		},
	},
	{
		files: ['components/navigation-menu/src/astro/**/*.astro'],
		rules: {
			'import/no-unresolved': 'off',
		},
	},
	{
		files: ['**/README.md/*'],
		rules: {
			'import/no-extraneous-dependencies': 'off',
		},
	}
);
