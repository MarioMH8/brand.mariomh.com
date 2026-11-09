import package_ from '@mariomh8/input/package.json';
import Component from '@mariomh8/input/react';
import {
	asChild,
	autoComplete,
	dimensionFont,
	disabled,
	family,
	id,
	placeholder,
	type,
	weight,
} from '@mariomh8/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * These stories showcase the input
 */
const meta = {
	args: {
		autoComplete: 'off',
		id: 'email-default',
		placeholder: 'usuario@dominio.es',
		type: 'email',
	},
	argTypes: {
		asChild,
		autoComplete,
		dimension: dimensionFont,
		disabled,
		family,
		id,
		placeholder,
		type,
		weight,
	},
	component: Component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Entrada',
} as Meta<typeof Component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
