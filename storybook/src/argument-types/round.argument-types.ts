import type { InputType } from 'storybook/internal/csf';

const round = {
	control: { required: false, type: 'select' },
	description: 'Tamaño del redondeo',
	name: 'Redondeo',
	options: ['unset', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'],
	table: { category: 'Personalizado', defaultValue: { summary: 'base' } },
} satisfies InputType;

export default round;
