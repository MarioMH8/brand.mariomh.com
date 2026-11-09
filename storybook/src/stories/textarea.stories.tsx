import {
	asChild,
	autoComplete,
	dimensionFont,
	disabled,
	family,
	id,
	placeholder,
	weight,
} from '@mariomh8/storybook/argument-types';
import package_ from '@mariomh8/textarea/package.json';
import Component from '@mariomh8/textarea/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * These stories showcase the textarea
 */
const meta = {
	args: {
		autoComplete: 'off',
		id: 'email-default',
		placeholder: 'Enim labore voluptate.',
	},
	argTypes: {
		asChild,
		autoComplete,
		dimension: dimensionFont,
		disabled,
		family,
		id,
		placeholder,
		weight,
	},
	component: Component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Area de texto',
} as Meta<typeof Component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
