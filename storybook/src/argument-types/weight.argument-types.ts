import type { InputType } from 'storybook/internal/csf';

const weight = {
	control: { required: false, type: 'select' },
	description: 'Peso del texto',
	name: 'Peso',
	options: ['light', 'base', 'medium', 'bold'],
	table: { category: 'Fuente', defaultValue: { summary: 'base' } },
} satisfies InputType;

export default weight;
