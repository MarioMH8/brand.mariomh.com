import type { InputType } from 'storybook/internal/csf';

const noSelect = {
	control: 'boolean',
	description: 'Evitar la selección del texto',
	name: 'No seleccionable',
	table: { category: 'Fuente', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default noSelect;
