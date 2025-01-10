import type { InputType } from '@storybook/types';

const wrap = {
	control: 'boolean',
	description: 'Ajustar texto a 75 carateres',
	name: 'Ajustar texto',
	table: { category: 'Personalizado', defaultValue: { summary: 'false' } },
} satisfies InputType;

export default wrap;
