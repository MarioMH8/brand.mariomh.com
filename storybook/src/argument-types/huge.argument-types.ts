import type { InputType } from 'storybook/internal/csf';

const huge = {
	control: 'boolean',
	description: 'Tamaño enorme',
	name: 'Enorme',
	table: { category: 'Personalizado', defaultValue: { summary: 'false' } },
} satisfies InputType;

export default huge;
