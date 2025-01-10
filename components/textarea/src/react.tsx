import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { TextareaVariantsProperties } from './variants';

interface ReactTextareaProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, TextareaVariantsProperties {
	asChild?: boolean;
}

const Textarea: FC<ReactTextareaProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Textarea.displayName = 'Textarea';

export type { ReactTextareaProperties };

export default Textarea;
