import package_ from '@mariomh/input/package.json';
import Component from '@mariomh/input/react';
import {
	asChild,
	autoComplete,
	dimensionFont,
	disabled,
	id,
	placeholder,
	type,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

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
		id,
		placeholder,
		type,
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
