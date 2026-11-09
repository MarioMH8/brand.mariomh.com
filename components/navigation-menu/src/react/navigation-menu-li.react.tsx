import { Slot } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import { NAVIGATION_MENU_LI_ELEMENT } from '../element';
import { propertiesNavigationMenuLI } from '../properties';
import type { NavigationMenuLIVariantsProperties } from '../variants';

interface ReactNavigationMenuLIProperties
	extends ComponentPropsWithRef<typeof NAVIGATION_MENU_LI_ELEMENT>, NavigationMenuLIVariantsProperties {
	asChild?: boolean;
}

const NavigationMenuLI: FC<ReactNavigationMenuLIProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot.Slot : NAVIGATION_MENU_LI_ELEMENT;

	return (
		<Comp
			{...propertiesNavigationMenuLI(p)}
			ref={ref}
		/>
	);
};

NavigationMenuLI.displayName = 'NavigationMenuLI';

export type { ReactNavigationMenuLIProperties };

export default NavigationMenuLI;
