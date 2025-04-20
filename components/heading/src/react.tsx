import { Slot } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { HeadingVariantsProperties } from './variants';

interface ReactHeadingProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, HeadingVariantsProperties {
	asChild?: boolean;
}

const Heading: FC<ReactHeadingProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot.Slot : (p.heading ?? ELEMENT_TYPE);

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Heading.displayName = 'Heading';

export type { ReactHeadingProperties };

export default Heading;
