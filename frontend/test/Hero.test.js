import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Hero from '../src/landing_page/home/Hero';

test('renders hero image', () => {

    render(
        <BrowserRouter>
            <Hero />
        </BrowserRouter>
    );

    const heroImage = screen.getByAltText('Hero Image');

    expect(heroImage).toBeInTheDocument();

});