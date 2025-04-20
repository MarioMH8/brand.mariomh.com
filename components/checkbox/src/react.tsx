import { CheckIcon } from 'lucide-react';
import { AccessibleIcon, Checkbox as RadixCheckbox } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import properties from './properties';
import type { CheckboxVariantsProperties } from './variants';

interface ReactCheckboxProperties
	extends CheckboxVariantsProperties,
		ComponentPropsWithRef<typeof RadixCheckbox.Checkbox> {
	iconLabel?: string;
}

const Checkbox: FC<ReactCheckboxProperties> = ({ iconLabel = 'Checked', ref, ...p }) => {
	return (
		<RadixCheckbox.Checkbox
			{...properties(p)}
			ref={ref}>
			<RadixCheckbox.CheckboxIndicator>
				<AccessibleIcon.AccessibleIcon label={iconLabel}>
					<CheckIcon />
				</AccessibleIcon.AccessibleIcon>
			</RadixCheckbox.CheckboxIndicator>
		</RadixCheckbox.Checkbox>
	);
};

Checkbox.displayName = 'Checkbox';

export type { ReactCheckboxProperties };

export default Checkbox;
