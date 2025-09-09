import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook-community/storybook-dark-mode',
	],
	docs: {
		defaultName: 'Documentación',
	},
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	staticDirs: ['../public'],
	stories: ['../src/docs/**/*.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],
};
export default config;
