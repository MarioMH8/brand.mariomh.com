import { Slot } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { LinkVariantsProperties } from './variants';

interface ReactLinkProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, LinkVariantsProperties {
	asChild?: boolean;
}

const Link: FC<ReactLinkProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot.Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Link.displayName = 'Link';

export type { ReactLinkProperties };

export default Link;
