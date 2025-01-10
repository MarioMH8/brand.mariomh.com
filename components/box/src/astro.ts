import type { HTMLTag, Polymorphic } from 'astro/types';

import type { BoxVariantsProperties } from './variants';

type AstroBoxHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroBoxProperties<Tag extends HTMLTag> = AstroBoxHTMLAttributes<Tag> & BoxVariantsProperties;

export { default } from './astro.astro';
