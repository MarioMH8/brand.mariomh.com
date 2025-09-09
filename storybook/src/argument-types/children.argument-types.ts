import type { InputType } from 'storybook/internal/csf';

const children = {
	description: 'Contenido del componente',
	name: 'Contenido',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'string', required: false },
} satisfies InputType;

export default children;
