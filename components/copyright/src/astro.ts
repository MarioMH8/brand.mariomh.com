import type { HTMLTag, Polymorphic } from 'astro/types';

import type { CopyrightVariantsProperties } from './variants';

type AstroCopyrightHTMLAttributes<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export type AstroCopyrightProperties<Tag extends HTMLTag> = AstroCopyrightHTMLAttributes<Tag> &
	CopyrightVariantsProperties;

export { default } from './astro.astro';
