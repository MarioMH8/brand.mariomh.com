import type { InputType } from '@storybook/types';

const type: InputType = {
	control: { required: false, type: 'select' },
	description: 'Tipo del componente',
	name: 'Tipo',
	options: [
		'button',
		'checkbox',
		'color',
		'date',
		'datetime-local',
		'email',
		'file',
		'hidden',
		'image',
		'month',
		'number',
		'password',
		'radio',
		'range',
		'reset',
		'search',
		'submit',
		'tel',
		'text',
		'time',
		'url',
		'week',
	],
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
};

export default type;
