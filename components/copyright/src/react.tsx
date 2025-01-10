import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { CopyrightVariantsProperties } from './variants';

interface ReactCopyrightProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, CopyrightVariantsProperties {
	asChild?: boolean;
}

const Copyright: FC<ReactCopyrightProperties> = ({
	asChild,
	from,
	ref,
	to = new Date().getFullYear().toFixed(0),
	...p
}) => {
	const Comp = ELEMENT_TYPE;
	const join = [from, to].filter(Boolean).join(' - ');

	return (
		<Comp
			{...properties(p)}
			ref={ref}>
			© {join} Mario Menéndez Hidalgo
		</Comp>
	);
};

Copyright.displayName = 'Copyright';

export type { ReactCopyrightProperties };

export default Copyright;
