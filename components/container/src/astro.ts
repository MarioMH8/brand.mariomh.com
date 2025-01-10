import type { HTMLTag, Polymorphic } from 'astro/types';

import type { ContainerVariantsProperties } from './variants';

type AstroContainerHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroContainerProperties<Tag extends HTMLTag> = AstroContainerHTMLAttributes<Tag> &
	ContainerVariantsProperties;

export { default } from './astro.astro';
