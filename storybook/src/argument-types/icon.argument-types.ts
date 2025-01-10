import type { InputType } from '@storybook/types';

const icon = {
	description: 'Modo icono',
	name: 'Icono',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
	type: { name: 'boolean', required: false },
} satisfies InputType;

export default icon;
