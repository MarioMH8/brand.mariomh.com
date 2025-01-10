import type { InputType } from '@storybook/types';

const subtitle = {
	control: 'boolean',
	description: 'Subtítulo',
	name: 'Subtítulo',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default subtitle;
