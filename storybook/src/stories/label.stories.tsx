import package_ from '@mariomh/label/package.json';
import component from '@mariomh/label/react';
import { asChild, children, dimensionFont, noSelect, weight } from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	args: {
		children: 'exercitation',
	},
	argTypes: {
		asChild,
		children,
		dimension: dimensionFont,
		noSelect,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ satisfies unknown satisfies { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Label',
} satisfies Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
