import type { HTMLTag, Polymorphic } from 'astro/types';

import type { HeadingVariantsProperties } from './variants';

type AstroHeadingHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroHeadingProperties<Tag extends HTMLTag> = AstroHeadingHTMLAttributes<Tag> & HeadingVariantsProperties;

export { default } from './astro.astro';
