import package_ from '@mariomh8/button/package.json';
import component from '@mariomh8/button/react';
import {
	asChild,
	children,
	dimensionFont,
	disabled,
	family,
	icon,
	noSelect,
	variantButton,
	weight,
} from '@mariomh8/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	args: {
		children: 'Botón',
		disabled: false,
	},
	argTypes: {
		asChild,
		children,
		dimension: { ...dimensionFont, options: dimensionFont.options.filter(option => option !== 'huge') },
		disabled,
		family,
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
