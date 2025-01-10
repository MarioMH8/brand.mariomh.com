import { Slot } from '@radix-ui/react-slot';
import type { FC, ReactNode } from 'react';

import cn from './class-name';
import type { RoundVariantsProperties } from './variants';

interface ReactRoundProperties extends RoundVariantsProperties {
	children: ReactNode;
	className?: string;
}

const Round: FC<ReactRoundProperties> = ({ children, className, ...variants }) => {
	return <Slot className={cn(variants, className)}>{children}</Slot>;
};

Round.displayName = 'Round';

export type { ReactRoundProperties };

export default Round;
