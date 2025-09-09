import type { InputType } from 'storybook/internal/csf';

const disabled = {
	description: 'Componente deshabilitado',
	name: 'Deshabilitado',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'boolean', required: false },
} satisfies InputType;

export default disabled;
