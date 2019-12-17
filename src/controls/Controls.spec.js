import React from 'react';
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls';



// - provide buttons to toggle the `closed` and `locked` states.

test("provide buttons to toggle the `closed` and `locked` states.", () => {
    const { getByText } = render(<Controls />)
    getByText(/lock gate/i);
    getByText(/close gate/i)
});

// - buttons' text changes to reflect the state the door will be in if clicked

test("when gate is locked and closed, button text shows unlock", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    getByText(/unlock gate/i);

})

test("when gate is unlocked and open, button text shows lock and close", () => {
    const { getByText } = render(<Controls locked={false} closed={false} />)
    getByText(/close gate/i)
})

// - the closed toggle button is disabled if the gate is locked
// - cannot be closed or opened if it is locked

test("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/open gate/i)).toHaveAttribute('disabled');
})

// - the locked toggle button is disabled if the gate is open

test("the locked toggle button is disabled if the gate is open", () => {
    const { getByText } = render(<Controls open={true} unlocked={true} />);
    expect(getByText(/lock gate/i)).toHaveAttribute('disabled');
})


