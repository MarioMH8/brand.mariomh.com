import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { BadgeVariantsProperties } from './variants';

interface ReactBadgeProperties extends BadgeVariantsProperties, ComponentPropsWithRef<typeof ELEMENT_TYPE> {
	asChild?: boolean;
}

const Badge: FC<ReactBadgeProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Badge.displayName = 'Badge';

export type { ReactBadgeProperties };

export default Badge;
