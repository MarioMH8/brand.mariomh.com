import type { InputType } from '@storybook/types';

const fromArgument: InputType = {
	description: 'Año desde',
	name: 'Desde',
	table: { category: 'Personalizado', defaultValue: { summary: 'now()' } },
	type: { name: 'number', required: false },
};

export default fromArgument;
