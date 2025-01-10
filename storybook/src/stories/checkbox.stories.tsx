import package_ from '@mariomh/checkbox/package.json';
import Comp from '@mariomh/checkbox/react';
import Label from '@mariomh/label/react';
import { asChild, dimensionFont, disabled, id, title } from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		title: 'Aceptar los términos y condiciones',
	},
	argTypes: {
		asChild,
		dimension: dimensionFont,
		disabled,
		id,
		title,
	},
	component: Comp,
	parameters: {
		category: 'Átomo',
		exports: ['react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Checkbox',
} as Meta<typeof Comp>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const WithLabel: StoryObj<typeof meta> = {
	args: {
		id: 'terms',
	},
	name: 'Con label',
	render: properties => {
		const labelId = `${properties.id ?? ''}-label`;

		return (
			<div className='flex items-center'>
				<Comp
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
