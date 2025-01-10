import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import ELEMENT_TYPE from './element';
import properties from './properties';
import type { ContainerVariantsProperties } from './variants';

interface ReactContainerProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, ContainerVariantsProperties {
	asChild?: boolean;
}

const Container: FC<ReactContainerProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Container.displayName = 'Container';

export type { ReactContainerProperties };

export default Container;
