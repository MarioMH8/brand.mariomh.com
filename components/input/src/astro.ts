import type { HTMLTag, Polymorphic } from 'astro/types';

import type { InputVariantsProperties } from './variants';

type AstroInputHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroInputProperties<Tag extends HTMLTag> = AstroInputHTMLAttributes<Tag> &
	Omit<InputVariantsProperties, 'type'>;

export { default } from './astro.astro';
