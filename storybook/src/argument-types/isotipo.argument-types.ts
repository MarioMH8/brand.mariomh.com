import type { InputType } from 'storybook/internal/csf';

const isotipo: InputType = {
	control: { required: false, type: 'select' },
	description: 'Variante del isotipo',
	name: 'Isotipo',
	options: ['primary', 'dark', 'light'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
};

export default isotipo;
