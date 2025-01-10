import type { InputType } from '@storybook/types';

const heading = {
	control: { required: true, type: 'select' },
	description: 'Tamaño de la cabecera',
	name: 'Tamaño',
	options: ['h1', 'h2', 'h3', 'h4', 'h5'],
	table: { category: 'Personalizado', defaultValue: { summary: 'h1' } },
} satisfies InputType;

export default heading;
