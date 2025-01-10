import type { HTMLTag, Polymorphic } from 'astro/types';

import type { BadgeVariantsProperties } from './variants';

type AstroBadgeHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroBadgeProperties<Tag extends HTMLTag> = AstroBadgeHTMLAttributes<Tag> & BadgeVariantsProperties;

export { default } from './astro.astro';
