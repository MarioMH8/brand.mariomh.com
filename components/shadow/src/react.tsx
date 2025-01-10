import { Slot } from '@radix-ui/react-slot';
import type { FC, ReactNode } from 'react';

import cn from './class-name';
import type { ShadowVariantsProperties } from './variants';

interface ReactShadowProperties extends ShadowVariantsProperties {
	children: ReactNode;
	className?: string;
}

const Shadow: FC<ReactShadowProperties> = ({ children, className, ...variants }) => {
	return <Slot className={cn(variants, className)}>{children}</Slot>;
};

Shadow.displayName = 'Shadow';

export type { ReactShadowProperties };

export default Shadow;
