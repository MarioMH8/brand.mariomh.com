import package_ from '@mariomh/button/package.json';
import component from '@mariomh/button/react';
import {
	asChild,
	children,
	dimensionFont,
	disabled,
	icon,
	noSelect,
	variantButton,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	args: {
		children: 'Botón',
		disabled: false,
	},
	argTypes: {
		asChild,
		children,
		dimension: dimensionFont,
		disabled,
		icon,
		noSelect,
		variant: variantButton,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Botón',
} as Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const Solid: StoryObj<typeof meta> = {
	args: {
		variant: 'solid',
	},
	name: 'Solido',
};

export { Default, Solid };

export default meta;
