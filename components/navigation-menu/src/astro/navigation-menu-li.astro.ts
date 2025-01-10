import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NavigationMenuLIVariantsProperties } from '../variants';

type AstroNavigationMenuLIHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

type AstroNavigationMenuLIProperties<Tag extends HTMLTag> = AstroNavigationMenuLIHTMLAttributes<Tag> &
	NavigationMenuLIVariantsProperties;

export type { AstroNavigationMenuLIProperties };

export { default } from './navigation-menu-li-c.astro';
