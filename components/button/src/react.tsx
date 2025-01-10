import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { ButtonVariantsProperties } from './variants';

interface ReactButtonProperties extends ButtonVariantsProperties, ComponentPropsWithRef<typeof ELEMENT_TYPE> {
	asChild?: boolean;
}

const Button: FC<ReactButtonProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Button.displayName = 'Button';

export type { ReactButtonProperties };

export default Button;
