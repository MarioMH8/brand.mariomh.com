import { Slot } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { BoxVariantsProperties } from './variants';

interface ReactBoxProperties extends BoxVariantsProperties, ComponentPropsWithRef<typeof ELEMENT_TYPE> {
	asChild?: boolean;
}

const Box: FC<ReactBoxProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot.Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Box.displayName = 'Box';

export type { ReactBoxProperties };

export default Box;
