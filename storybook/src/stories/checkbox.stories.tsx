import package_ from '@mariomh8/checkbox/package.json';
import type { ReactCheckboxProperties } from '@mariomh8/checkbox/react';
import Component from '@mariomh8/checkbox/react';
import Label from '@mariomh8/label/react';
import { asChild, dimensionFont, disabled, id, title } from '@mariomh8/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * These stories showcase the checkbox
 */
const meta = {
	args: {
		// Checkbox args
		title: 'Aceptar los términos y condiciones',
	},
	argTypes: {
		asChild,
		dimension: { ...dimensionFont, options: dimensionFont.options.filter(option => option !== 'huge') },
		disabled,
		id,
		title,
	},
	component: Component,
	parameters: {
		category: 'Átomo',
		exports: ['react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Checkbox',
} as Meta<typeof Component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const WithLabel: StoryObj<ReactCheckboxProperties> = {
	args: {
		id: 'terms',
	},
	name: 'Con label',
	render: properties => {
		const labelId = `${properties.id ?? ''}-label`;

		return (
			<div className='flex items-center'>
				<Component
					{...properties}
					aria-labelledby={labelId}
				/>
				<Label
					className='pl-4'
					htmlFor={properties.id}
					id={labelId}>
					Aceptar los términos y condiciones.
				</Label>
			</div>
		);
	},
};

export { Default, WithLabel };

export default meta;
