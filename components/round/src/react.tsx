import { Slot } from 'radix-ui';
import type { FC, ReactNode } from 'react';

import cn from './class-name';
import type { RoundVariantsProperties } from './variants';

interface ReactRoundProperties extends RoundVariantsProperties {
	children: ReactNode;
	className?: string;
}

const Round: FC<ReactRoundProperties> = ({ children, className, ...variants }) => {
	return <Slot.Slot className={cn(variants, className)}>{children}</Slot.Slot>;
};

Round.displayName = 'Round';

export type { ReactRoundProperties };

export default Round;
