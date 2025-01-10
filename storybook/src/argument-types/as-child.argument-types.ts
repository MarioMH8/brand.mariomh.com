import type { InputType } from '@storybook/types';

const asChild = {
	control: 'boolean',
	description: 'Fusiona las propiedades con el elemento hijo',
	name: 'Fusionar',
	table: { category: 'React', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default asChild;
