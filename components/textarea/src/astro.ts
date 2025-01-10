import type { HTMLTag, Polymorphic } from 'astro/types';

import type { TextareaVariantsProperties } from './variants';

type AstroTextareaHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroTextareaProperties<Tag extends HTMLTag> = AstroTextareaHTMLAttributes<Tag> &
	TextareaVariantsProperties;

export { default } from './astro.astro';
