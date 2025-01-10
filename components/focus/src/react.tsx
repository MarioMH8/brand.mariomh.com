import { Slot } from '@radix-ui/react-slot';
import type { FC, ReactNode } from 'react';

import cn from './class-name';
import type { FocusVariantsProperties } from './variants';

interface ReactFocusProperties extends FocusVariantsProperties {
	children: ReactNode;
	className?: string;
}

const Focus: FC<ReactFocusProperties> = ({ children, className, ...variants }) => {
	return <Slot className={cn(variants, className)}>{children}</Slot>;
};

Focus.displayName = 'Focus';

export type { ReactFocusProperties };

export default Focus;
