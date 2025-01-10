import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { SelectVariantsProperties } from './variants';

interface ReactSelectProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, SelectVariantsProperties {
	asChild?: boolean;
}

const Select: FC<ReactSelectProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Select.displayName = 'Select';

export type { ReactSelectProperties };

export default Select;
