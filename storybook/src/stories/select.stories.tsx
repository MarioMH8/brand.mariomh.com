import package_ from '@mariomh/select/package.json';
import Component from '@mariomh/select/react';
import { asChild, dimensionFont, disabled, family, id, weight } from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * These stories showcase the select
 */
const meta = {
	args: {
		// Select args
		id: 'email-default',
	},
	argTypes: {
		asChild,
		dimension: { ...dimensionFont, options: dimensionFont.options.filter(option => option !== 'huge') },
		disabled,
		family,
		id,
		weight,
	},
	component: Component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	render: properties => (
		<Component {...properties}>
			<option value='1'>Opción 1</option>
			<option value='2'>Opción 2</option>
		</Component>
	),
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Select',
} as Meta<typeof Component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
