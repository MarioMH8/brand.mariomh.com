import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { SpanVariantsProperties } from './variants';

interface ReactSpanProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, SpanVariantsProperties {
	asChild?: boolean;
}

const Span: FC<ReactSpanProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Span.displayName = 'Span';

export type { ReactSpanProperties };

export default Span;
