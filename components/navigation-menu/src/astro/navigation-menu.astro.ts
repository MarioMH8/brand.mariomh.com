import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NavigationMenuVariantsProperties } from '../variants';

type AstroNavigationMenuHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

type AstroNavigationMenuProperties<Tag extends HTMLTag> = AstroNavigationMenuHTMLAttributes<Tag> &
	NavigationMenuVariantsProperties;

export type { AstroNavigationMenuProperties };

export { default } from './navigation-menu-c.astro';
