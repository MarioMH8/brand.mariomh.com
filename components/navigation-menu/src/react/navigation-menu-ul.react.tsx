import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import { NAVIGATION_MENU_UL_ELEMENT } from '../element';
import { propertiesNavigationMenuUL } from '../properties';
import type { NavigationMenuULVariantsProperties } from '../variants';

interface ReactNavigationMenuULProperties
	extends ComponentPropsWithRef<typeof NAVIGATION_MENU_UL_ELEMENT>,
		NavigationMenuULVariantsProperties {
	asChild?: boolean;
}

const NavigationMenuUL: FC<ReactNavigationMenuULProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : NAVIGATION_MENU_UL_ELEMENT;

	return (
		<Comp
			{...propertiesNavigationMenuUL(p)}
			ref={ref}
		/>
	);
};

NavigationMenuUL.displayName = 'NavigationMenuUL';

export type { ReactNavigationMenuULProperties };

export default NavigationMenuUL;
