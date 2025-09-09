import type { InputType } from 'storybook/internal/csf';

const subtitle = {
	control: 'boolean',
	description: 'Subtítulo',
	name: 'Subtítulo',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default subtitle;
