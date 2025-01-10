import Component from '@mariomh/link/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

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

describe('@mariomh/link/react', () => {
	it('should default render', () => {
		const { container } = render(<Component>Test Message</Component>);
		const child = container.firstElementChild;
		assetComponent(child);
	});
	it('should asChild works as expected render', () => {
		const { container } = render(
			<Component asChild>
				<span>Test Message</span>
			</Component>
		);
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
				disabled
				href='https://example.com'
				intent='primary'
				noSelect
				weight='medium'>
				Test Message
			</Component>
		);
		const child = container.firstElementChild;
		assetComponent(child);
		expect(child?.attributes.length).toBe(2);
		expect(child?.attributes.item(0)?.name).toBe('href');
		expect(child?.attributes.item(1)?.name).toBe('class');
		expect(child?.classList.contains('block')).toBeTruthy();
	});
});
