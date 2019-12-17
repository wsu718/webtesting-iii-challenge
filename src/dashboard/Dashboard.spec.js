import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from "./Dashboard";

test('Dashboard renders and shows controls and display', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
})

