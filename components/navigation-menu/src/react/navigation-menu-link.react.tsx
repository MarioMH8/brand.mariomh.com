import { Slot } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import { NAVIGATION_MENU_A_ELEMENT } from '../element';
import { propertiesNavigationMenuLink } from '../properties';
import type { NavigationMenuLinkVariantsProperties } from '../variants';

interface ReactNavigationMenuLinkProperties
	extends ComponentPropsWithRef<typeof NAVIGATION_MENU_A_ELEMENT>, NavigationMenuLinkVariantsProperties {
	asChild?: boolean;
}

const NavigationMenuLink: FC<ReactNavigationMenuLinkProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot.Slot : NAVIGATION_MENU_A_ELEMENT;

	return (
		<Comp
			{...propertiesNavigationMenuLink(p)}
			ref={ref}
		/>
	);
};

NavigationMenuLink.displayName = 'NavigationMenuLink';

export type { ReactNavigationMenuLinkProperties };

export default NavigationMenuLink;
