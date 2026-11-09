import { name } from '@mariomh8/logo/package.json';
import component from '@mariomh8/logo/react';
import { asChild, dimensionLogo, isotipo, logotipo, variantLogo } from '@mariomh8/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	argTypes: {
		asChild,
		dimension: dimensionLogo,
		isotipo,
		logotipo,
		variant: variantLogo,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Logo',
} satisfies Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
