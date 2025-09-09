import type { InputType } from 'storybook/internal/csf';

const icon = {
	description: 'Modo icono',
	name: 'Icono',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
	type: { name: 'boolean', required: false },
} satisfies InputType;

export default icon;
