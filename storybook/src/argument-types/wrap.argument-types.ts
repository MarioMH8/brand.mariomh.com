import type { InputType } from 'storybook/internal/csf';

const wrap = {
	control: 'boolean',
	description: 'Ajustar texto a 75 carateres',
	name: 'Ajustar texto',
	table: { category: 'Personalizado', defaultValue: { summary: 'false' } },
} satisfies InputType;

export default wrap;
