import { SourceCode, Stories, Story, SubTitle, Title } from '@mariomh/storybook/blocks';
import useIsDarkMode from '@mariomh/storybook/hooks';
import { Controls } from '@storybook/blocks';
import { convert, ThemeProvider, themes } from '@storybook/core/theming';
import type { JSX } from 'react';

export default function DocumentPage(): JSX.Element {
	const isDark = useIsDarkMode();
	const content = (
		<>
			<Title />
			<SubTitle />
			<hr className='mb-6 !border-primary-foreground/50 dark:!border-primary-dark-foreground/50' />
			<Story />
			<SourceCode />
			<Controls />
			<Stories />
		</>
	);
	if (isDark) {
		return <ThemeProvider theme={convert(themes.dark)}>{content}</ThemeProvider>;
	}

	return <ThemeProvider theme={convert(themes.light)}>{content}</ThemeProvider>;
}
