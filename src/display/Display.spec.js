import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('Renders', () => {
    render(<Display />)
})

// "Displays if gate is open/closed and if it is locked/unlocked"
// this is tested in ./Dashboard

// displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    getByText(/Closed/i);
    getByText(/Locked/i);
});

// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    getByText(/Open/i);
    getByText(/Unlocked/i);
});

// - when `locked` or `closed` use the `red-led` class

test("when `locked` or `closed` use the `red-led` class", () => {
    const { getByText } = render(<Display locked={true} closed={true} />)
    expect(getByText(/locked/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
});

// - when `unlocked` or `open` use the `green-led` class
test("when `unlocked` or `open` use the `green-led` class", () => {
    const { getByText } = render(<Display locked={false} closed={false} />)
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
})

