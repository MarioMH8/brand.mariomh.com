import { create } from '@storybook/core/theming';

// https://storybook.js.org/docs/configure/user-interface/theming
const light = create({
	/*
	 * appBg: '#f8fbef',
	 * appPreviewBg: '#fbfcf7',
	 * barHoverColor: '#bbe600',
	 * barSelectedColor: '#c4f014',
	 * barTextColor: '#647a00',
	 */
	base: 'light',
	brandImage: '/isotipo.svg',
	brandTitle: 'MarioMH UI',
	brandUrl: 'https://design.mariomh.com',
	// colorSecondary: '#647a00',
});

const dark = create({
	/*
	 * appBg: '#212711',
	 * appPreviewBg: '#0f1009',
	 * barHoverColor: '#bfe543',
	 * barSelectedColor: '#c6f218',
	 * barTextColor: '#c1e746',
	 */
	base: 'dark',
	brandImage: '/isotipo.svg',
	brandTitle: 'MarioMH UI',
	brandUrl: 'https://design.mariomh.com',
	// colorSecondary: '#5e7321',
});

export { dark, light };
