import type { HTMLTag, Polymorphic } from 'astro/types';

import type { LogoVariantsProperties } from './variants';

type AstroLogoHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroLogoProperties<Tag extends HTMLTag> = AstroLogoHTMLAttributes<Tag> & LogoVariantsProperties;

export { default } from './astro.astro';
