import package_ from '@mariomh8/container/package.json';
import Comp from '@mariomh8/container/react';
import { asChild, children } from '@mariomh8/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * These stories showcase the container
 */
const meta = {
	args: {
		children: `In tempor deserunt Lorem nisi. Sint elit velit reprehenderit ad cupidatat deserunt ex nulla sunt. Veniam cillum est culpa irure duis sunt. Adipisicing consectetur magna sint nisi consequat consequat velit dolore.
Deserunt occaecat ea quis sunt anim ad ullamco consectetur ipsum aliquip anim id ad consequat. Amet est ad ipsum. Id velit proident exercitation sint sunt do laborum et aliqua consequat fugiat. Ipsum commodo pariatur non veniam sit.
Veniam nulla qui qui excepteur duis excepteur officia minim excepteur elit adipisicing culpa cupidatat culpa. Proident non adipisicing dolore minim qui commodo do do mollit minim consequat velit ullamco. Voluptate ullamco mollit et veniam ad ex nostrud sunt ex. Reprehenderit ut deserunt excepteur laborum cillum laboris consectetur mollit consectetur sit. Ad incididunt et dolor consequat. Laborum consectetur excepteur ad commodo commodo tempor id ad. Excepteur qui qui incididunt pariatur fugiat veniam minim ad sunt sunt anim tempor labore commodo exercitation. Dolore elit pariatur dolore in labore id.
Magna ullamco velit laboris ut ea voluptate officia enim cillum fugiat et esse. Ad sit ipsum eiusmod veniam ad. Officia occaecat minim laboris reprehenderit amet deserunt aliqua. Aliquip dolore sint adipisicing reprehenderit eu elit quis cupidatat est.`,
	},
	argTypes: {
		asChild,
		children,
	},
	Comp,
	parameters: {
		category: 'Objeto',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	render: properties => <Comp {...properties} />,
	tags: ['autodocs'],
	title: 'Objetos/Contenedor',
} as Meta<typeof Comp>;

export const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export default meta;
