import type { InputType } from '@storybook/types';

const disabled = {
	description: 'Componente deshabilitado',
	name: 'Deshabilitado',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'boolean', required: false },
} satisfies InputType;

export default disabled;
