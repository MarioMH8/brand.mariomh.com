import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NavigationMenuULVariantsProperties } from '../variants';

type AstroNavigationMenuULHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

type AstroNavigationMenuULProperties<Tag extends HTMLTag> = AstroNavigationMenuULHTMLAttributes<Tag> &
	NavigationMenuULVariantsProperties;

export type { AstroNavigationMenuULProperties };

export { default } from './navigation-menu-ul-c.astro';
