import package_ from '@mariomh/paragraph/package.json';
import Comp from '@mariomh/paragraph/react';
import {
	align,
	asChild,
	children,
	dimensionFont,
	noSelect,
	variantFont,
	weight,
	wrap,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	argTypes: {
		align,
		asChild,
		children,
		dimension: dimensionFont,
		noSelect,
		variant: variantFont,
		weight,
		wrap,
	},
	component: Comp,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ satisfies unknown satisfies { name: string }).name,
	},
	render: properties => (
		<>
			<Comp {...properties}>
				Voluptate consequat id voluptate. Velit quis eu dolor. Veniam non laboris irure laboris et officia
				reprehenderit tempor do. Sunt aute ipsum ad ipsum eu eu. Tempor minim adipisicing magna officia sit
				labore. Et veniam culpa do sunt quis deserunt. Consequat esse incididunt sunt aliqua qui eu laboris do.
				Cillum aliqua amet fugiat exercitation eu aliqua commodo sit minim.
			</Comp>
			<Comp {...properties}>
				Amet exercitation cupidatat culpa nulla exercitation id id dolor voluptate. Ullamco culpa occaecat
				laborum. Ipsum ad esse eu velit cupidatat et nostrud cillum commodo proident ipsum esse incididunt
				aliqua. Officia excepteur eu duis nisi incididunt adipisicing incididunt Lorem anim. Eu consequat cillum
				occaecat ex culpa sunt ipsum exercitation duis incididunt est sint consequat. Quis aliqua eiusmod
				laboris. Irure eiusmod dolor occaecat elit aliqua et id. Adipisicing tempor ea nostrud minim. Ea ipsum
				in ea sunt nostrud irure dolor.
			</Comp>
			<Comp {...properties}>
				Proident Lorem exercitation culpa quis fugiat enim cupidatat occaecat excepteur exercitation enim nisi
				culpa incididunt. Aliquip nisi deserunt ipsum est incididunt minim est dolore Lorem cillum. Est
				incididunt laboris sit culpa ut fugiat ullamco duis voluptate enim. Reprehenderit ex commodo velit eu.
				Voluptate culpa eu proident excepteur. Voluptate anim cillum consequat nulla ad non...
			</Comp>
		</>
	),
	tags: ['autodocs'],
	title: 'Átomos/Tipografía/Párrafo',
} satisfies Meta<typeof Comp>;

export const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export default meta;
