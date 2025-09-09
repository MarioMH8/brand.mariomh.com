import type { InputType } from 'storybook/internal/csf';

const asChild = {
	control: 'boolean',
	description: 'Fusiona las propiedades con el elemento hijo',
	name: 'Fusionar',
	table: { category: 'React', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default asChild;
