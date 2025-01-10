import type { InputType } from '@storybook/types';

const target = {
	control: { required: false, type: 'select' },
	description: 'Donde se abrirá el enlace',
	name: 'Destino',
	options: ['_blank', '_self', '_parent', '_top', 'framename'],
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default target;
