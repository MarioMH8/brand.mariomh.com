import type { HTMLTag, Polymorphic } from 'astro/types';

import type { LabelVariantsProperties } from './variants';

type AstroLabelHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroLabelProperties<Tag extends HTMLTag> = AstroLabelHTMLAttributes<Tag> & LabelVariantsProperties;

export { default } from './astro.astro';
