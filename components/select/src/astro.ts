import type { HTMLTag, Polymorphic } from 'astro/types';

import type { SelectVariantsProperties } from './variants';

type AstroSelectHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroSelectProperties<Tag extends HTMLTag> = AstroSelectHTMLAttributes<Tag> & SelectVariantsProperties;

export { default } from './astro.astro';
