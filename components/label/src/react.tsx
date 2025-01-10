import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { LabelVariantsProperties } from './variants';

interface ReactLabelProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, LabelVariantsProperties {
	asChild?: boolean;
}

const Label: FC<ReactLabelProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Label.displayName = 'Label';

export type { ReactLabelProperties };

export default Label;
