import type { InputType } from '@storybook/types';

const dimensionFont = {
	control: { required: false, type: 'select' },
	description: 'Tamaño del texto',
	name: 'Tamaño',
	options: ['unset', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', 'huge'],
	table: { category: 'Fuente', defaultValue: { summary: 'base' } },
} satisfies InputType;

const dimensionLogo: InputType = {
	control: { required: false, type: 'select' },
	description: 'Tamaño del logo',
	name: 'Tamaño',
	options: ['xs', 'sm', 'base', 'lg'],
	table: { category: 'Personalizado', defaultValue: { summary: 'base' } },
};

export { dimensionFont, dimensionLogo };
