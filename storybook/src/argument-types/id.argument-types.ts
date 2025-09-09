import type { InputType } from 'storybook/internal/csf';

const id = {
	description: 'Identificador del componente',
	name: 'Identificador',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'string', required: true },
} satisfies InputType;

export default id;
