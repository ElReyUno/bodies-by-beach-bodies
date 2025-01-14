// filepath: src/pages/__tests__/index.test.jsx
import { render, screen } from '@testing-library/react';
import Home from '../index'; // Import the Home Component
import { useTitle, useMeta } from '../../utils/seo';
import React from 'react';

// Mock the useTitle and useMeta functions
jest.mock('../../utils/seo', () => ({
    useTitle: jest.fn(() => ({
        title: 'Bodies By Beach Bodies',
    })),
    useMeta: jest.fn(() => ({
        description: "Transform your body with the Bodies by Beach Bodies Personal Training website, with bootcamps, one-on-one sessions, and online coaching.",
    }))
}));

describe('Home Component', () => {
    // Test Case: Home Component should render the main heading
    it('should render the main heading', () => {
        render(<Home />);
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
    });
    // Test Case: Home Component should render a button
    it('should render a button', () => {
        render(<Home />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should have the correct title', () => {
        render(<Home />);
        const meta = useTitle();
        expect(meta.title).toEqual("Bodies By Beach Bodies");
    });
    it('should include an SEO description', () => {
        render(<Home />);
        const meta = useMeta();
        expect(meta.description).toEqual("Transform your body with the Bodies by Beach Bodies Personal Training website, with bootcamps, one-on-one sessions, and online coaching.");
    });
});