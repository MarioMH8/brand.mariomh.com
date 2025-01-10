import type { InputType } from '@storybook/types';

const to: InputType = {
	description: 'Año hasta',
	name: 'Hasta',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
	type: { name: 'number', required: false },
};

export default to;
