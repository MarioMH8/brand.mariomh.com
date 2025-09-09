import { Stories as StorybookStories, useOf } from '@storybook/addon-docs/blocks';
import type { JSX } from 'react';

export default function Stories(): JSX.Element | undefined {
	const resolvedOf = useOf('meta', ['meta']);
	const { stories } = resolvedOf.csfFile;
	const isSingleStory = Object.keys(stories).length === 1;

	return isSingleStory ? undefined : <StorybookStories title='Variantes' />;
}
