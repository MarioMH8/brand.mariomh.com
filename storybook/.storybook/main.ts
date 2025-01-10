import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-links', 'storybook-dark-mode'],
	docs: {
		defaultName: 'Documentación',
	},
	framework: '@storybook/react-vite',
	staticDirs: ['../public'],
	stories: ['../src/docs/**/*.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],
};

export default config;
