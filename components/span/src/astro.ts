import type { HTMLTag, Polymorphic } from 'astro/types';

import type { SpanVariantsProperties } from './variants';

type AstroSpanHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroSpanProperties<Tag extends HTMLTag> = AstroSpanHTMLAttributes<Tag> & SpanVariantsProperties;

export { default } from './astro.astro';
