import type { HTMLTag, Polymorphic } from 'astro/types';

import type { ButtonVariantsProperties } from './variants';

type AstroButtonHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroButtonProperties<Tag extends HTMLTag> = AstroButtonHTMLAttributes<Tag> & ButtonVariantsProperties;

export { default } from './astro.astro';
