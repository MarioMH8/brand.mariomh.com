import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { ParagraphVariantsProperties } from './variants';

interface ReactParagraphProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, ParagraphVariantsProperties {
	asChild?: boolean;
}

const Paragraph: FC<ReactParagraphProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Paragraph.displayName = 'Paragraph';

export type { ReactParagraphProperties };

export default Paragraph;
