import type { InputType } from '@storybook/types';

const variantButton = {
	control: { required: false, type: 'select' },
	description: 'Variante de botón',
	name: 'Variante',
	options: ['solid'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantFont: InputType = {
	control: { required: false, type: 'select' },
	description: 'Variante de texto',
	name: 'Variante',
	options: ['muted', 'bright'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
};

const variantLogo: InputType = {
	control: { required: false, type: 'select' },
	description: 'Variante de forma',
	name: 'Variante',
	options: ['isotipo', 'logotipo'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
};

export { variantButton, variantFont, variantLogo };
