import type { InputType } from 'storybook/internal/csf';

const defaultValue: InputType = {
	description: 'Pestaña abierta por defecto',
	name: 'Pestaña',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
	type: { name: 'string', required: false },
};

export default defaultValue;
