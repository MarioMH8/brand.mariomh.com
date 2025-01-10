import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { InputVariantsProperties } from './variants';

interface ReactInputProperties
	extends ComponentPropsWithRef<typeof ELEMENT_TYPE>,
		Omit<InputVariantsProperties, 'type'> {
	asChild?: boolean;
}

const Input: FC<ReactInputProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Input.displayName = 'Input';

export type { ReactInputProperties };

export default Input;
