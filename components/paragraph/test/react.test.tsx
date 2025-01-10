import Component from '@mariomh/paragraph/react';
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

describe('@mariomh/paragraph/react', () => {
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
				align='end'
				className='block'
				dimension='lg'
				noSelect
				wrap>
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
