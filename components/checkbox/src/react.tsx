import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { Checkbox as RadixCheckbox, CheckboxIndicator } from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import type { ComponentPropsWithRef, FC } from 'react';

import properties from './properties';
import type { CheckboxVariantsProperties } from './variants';

interface ReactCheckboxProperties extends CheckboxVariantsProperties, ComponentPropsWithRef<typeof RadixCheckbox> {
	iconLabel?: string;
}

const Checkbox: FC<ReactCheckboxProperties> = ({ iconLabel = 'Checked', ref, ...p }) => {
	return (
		<RadixCheckbox
			{...properties(p)}
			ref={ref}>
			<CheckboxIndicator>
				<AccessibleIcon label={iconLabel}>
					<CheckIcon />
				</AccessibleIcon>
			</CheckboxIndicator>
		</RadixCheckbox>
	);
};

Checkbox.displayName = 'Checkbox';

export type { ReactCheckboxProperties };

export default Checkbox;
