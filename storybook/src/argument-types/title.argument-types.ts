import type { InputType } from '@storybook/types';

const title = {
	description: 'Título del componente',
	name: 'Título',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'string', required: false },
} satisfies InputType;

export default title;
