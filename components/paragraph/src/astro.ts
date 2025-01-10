import type { HTMLTag, Polymorphic } from 'astro/types';

import type { ParagraphVariantsProperties } from './variants';

type AstroParagraphHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroParagraphProperties<Tag extends HTMLTag> = AstroParagraphHTMLAttributes<Tag> &
	ParagraphVariantsProperties;

export { default } from './astro.astro';
