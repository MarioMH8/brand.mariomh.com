import type { InputType } from '@storybook/types';

const href = {
	description: 'Dirección del enlace',
	name: 'Dirección',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'string', required: false },
} satisfies InputType;

export default href;
