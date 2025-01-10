import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NavigationMenuLinkVariantsProperties } from '../variants';

type AstroNavigationMenuLinkHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

type AstroNavigationMenuLinkProperties<Tag extends HTMLTag> = AstroNavigationMenuLinkHTMLAttributes<Tag> &
	NavigationMenuLinkVariantsProperties;

export type { AstroNavigationMenuLinkProperties };

export { default } from './navigation-menu-link-c.astro';
