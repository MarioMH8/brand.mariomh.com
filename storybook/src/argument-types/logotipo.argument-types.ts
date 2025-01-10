import type { InputType } from '@storybook/types';

const logotipo: InputType = {
	control: { required: false, type: 'select' },
	description: 'Variante del logotipo',
	name: 'Logotipo',
	options: ['primary', 'dark', 'light'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
};

export default logotipo;
