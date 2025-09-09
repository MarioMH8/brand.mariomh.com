import type { InputType } from 'storybook/internal/csf';

const align = {
	control: { required: false, type: 'select' },
	description: 'Alineación del texto',
	name: 'Alinear',
	options: ['start', 'center', 'end'],
	table: { category: 'Fuente', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default align;
