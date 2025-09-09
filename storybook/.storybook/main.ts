import { createRequire } from 'node:module';
import path from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): string {
	return path.dirname(require.resolve(path.join(value, 'package.json')));
}

const config: StorybookConfig = {
	addons: [
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-links'),
		// getAbsolutePath('@storybook-community/storybook-dark-mode'),
		getAbsolutePath('@storybook/addon-docs'),
	],
	docs: {
		defaultName: 'Documentación',
	},
	framework: getAbsolutePath('@storybook/react-vite'),
	staticDirs: ['../public'],
	stories: ['../src/docs/**/*.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],
};

export default config;
