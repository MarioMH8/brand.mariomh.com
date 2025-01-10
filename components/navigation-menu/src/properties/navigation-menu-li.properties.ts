import type { AstroNavigationMenuLIProperties } from '../astro';
import { classNameNavigationMenuLI } from '../class-name';
import { NAVIGATION_MENU_LI_ELEMENT } from '../element';
import type { ReactNavigationMenuLIProperties } from '../react';
import type { NavigationMenuLIVariantsProperties } from '../variants';

export default function properties<
	T extends AstroNavigationMenuLIProperties<typeof NAVIGATION_MENU_LI_ELEMENT> | ReactNavigationMenuLIProperties,
>(p?: NavigationMenuLIVariantsProperties & T): T {
	if (!p) {
		return {
			className: classNameNavigationMenuLI(p),
		} as T;
	}

	const {
		asChild: _asChild,
		class: cls1,
		className: cls2,
		...rest
	} = p as AstroNavigationMenuLIProperties<typeof NAVIGATION_MENU_LI_ELEMENT> & ReactNavigationMenuLIProperties;

	return {
		...rest,
		className: classNameNavigationMenuLI(p satisfies T, cls1, cls2),
	} as T;
}
