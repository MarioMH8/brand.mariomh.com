import type { HTMLTag, Polymorphic } from 'astro/types';

import type { LinkVariantsProperties } from './variants';

type AstroLinkHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroLinkProperties<Tag extends HTMLTag> = AstroLinkHTMLAttributes<Tag> & LinkVariantsProperties;

export { default } from './astro.astro';
