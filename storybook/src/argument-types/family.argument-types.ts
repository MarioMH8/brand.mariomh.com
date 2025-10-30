import type { InputType } from 'storybook/internal/csf';

const family = {
	control: { required: false, type: 'select' },
	description: 'Familia de la fuente del texto',
	name: 'Fuente',
	options: ['primary', 'secondary'],
	table: { category: 'Fuente' },
} satisfies InputType;

export default family;
