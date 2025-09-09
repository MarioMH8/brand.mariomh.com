import package_ from '@mariomh/box/package.json';
import Comp from '@mariomh/box/react';
import { asChild, children, round } from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * These stories showcase the box
 */
const meta = {
	args: {
		children: 'Adipisicing amet incididunt fugiat voluptate culpa qui duis id cillum.',
	},
	argTypes: {
		asChild,
		children,
		round,
	},
	Comp,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	render: ({ children, ...properties }) => (
		<Comp
			{...properties}
			className='min-w-[400px] min-h-[300px]'>
			{children}
		</Comp>
	),
	tags: ['autodocs'],
	title: 'Átomos/Caja',
} as Meta<typeof Comp>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
