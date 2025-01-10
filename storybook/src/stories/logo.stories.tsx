import package_ from '@mariomh/logo/package.json';
import component from '@mariomh/logo/react';
import { dimensionLogo, isotipo, logotipo, variantLogo } from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	argTypes: {
		dimension: dimensionLogo,
		isotipo,
		logotipo,
		variant: variantLogo,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ satisfies unknown satisfies { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Logo',
} satisfies Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
