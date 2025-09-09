import type { InputType } from 'storybook/internal/csf';

const fromArgument: InputType = {
	description: 'Año desde',
	name: 'Desde',
	table: { category: 'Personalizado', defaultValue: { summary: 'now()' } },
	type: { name: 'number', required: false },
};

export default fromArgument;
