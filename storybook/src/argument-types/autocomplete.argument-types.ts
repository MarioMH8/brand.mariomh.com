import type { InputType } from '@storybook/types';

const autoComplete: InputType = {
	description: 'Autocompletado del campo',
	name: 'Autocompletado',
	table: { category: 'Nativo', defaultValue: { summary: 'undefined' } },
	type: { name: 'string', required: false },
};

export default autoComplete;
