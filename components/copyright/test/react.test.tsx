import Component from '@mariomh8/copyright/react';
import { render } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it, setSystemTime } from 'bun:test';

function assetComponent(element: Element | null): void {
	expect(element).toBeDefined();
	if (!element) {
		return;
	}
	expect(element.tagName).toMatchSnapshot();
	expect(element.children).toMatchSnapshot();
	expect(element.textContent).toMatchSnapshot();
	expect([...element.classList]).toMatchSnapshot();
}

describe('@mariomh8/copyright/react', () => {
	beforeAll(() => {
		setSystemTime(new Date('2025-06-01T00:00:00Z'));
	});

	afterAll(() => {
		setSystemTime();
	});

	it('should default render', () => {
		const { container } = render(<Component>Test Message</Component>);
		const child = container.firstElementChild;
		assetComponent(child);
	});
	it('should override class', () => {
		const { container } = render(<Component className='text-2xl'>Test Message</Component>);
		const child = container.firstElementChild;
		assetComponent(child);
		expect(child?.classList.contains('text-2xl')).toBeTruthy();
	});
	it('should exclude variants props', () => {
		const { container } = render(
			<Component
				className='block'
				dimension='lg'
				from='2022'
				noSelect
				to='2024'>
				Test Message
			</Component>
		);
		const child = container.firstElementChild;
		assetComponent(child);
		expect(child?.attributes.length).toBe(1);
		expect(child?.attributes.item(0)?.name).toBe('class');
		expect(child?.classList.contains('block')).toBeTruthy();
	});
});
