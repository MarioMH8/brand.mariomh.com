import package_ from '@mariomh/badge/package.json';
import component from '@mariomh/badge/react';
import { asChild, children, dimensionFont, family, noSelect, weight } from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	args: {
		children: 'exercitation',
	},
	argTypes: {
		asChild,
		children,
		dimension: dimensionFont,
		family: { ...family, table: { ...family.table, defaultValue: { summary: 'secondary' } } },
		noSelect,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Insignia',
} as Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
