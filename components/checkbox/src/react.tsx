import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import type { CheckboxProps as RadixCheckboxProperties } from '@radix-ui/react-checkbox';
import { Checkbox as RadixCheckbox, CheckboxIndicator } from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import { forwardRef } from 'react';

import properties from './properties';
import type { CheckboxVariantsProperties } from './variants';

interface ReactCheckboxProperties extends CheckboxVariantsProperties, RadixCheckboxProperties {
	iconLabel?: string;
}

const Checkbox = forwardRef<HTMLButtonElement, ReactCheckboxProperties>(
	({ iconLabel = 'Checked', ...p }, reference) => (
		<RadixCheckbox
			{...properties(p)}
			ref={reference}>
			<CheckboxIndicator>
				<AccessibleIcon label={iconLabel}>
					<CheckIcon />
				</AccessibleIcon>
			</CheckboxIndicator>
		</RadixCheckbox>
	)
);

Checkbox.displayName = 'Checkbox';

export type { ReactCheckboxProperties };

export default Checkbox;
