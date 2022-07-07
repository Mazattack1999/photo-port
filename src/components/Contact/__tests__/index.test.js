import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

const contactFormRender = <ContactForm></ContactForm>;

describe('ContactForm component', () => {
    it('renders', () => {
        render(contactFormRender);
    })

    it('matches snapshot', () => {
        const {asFragment} = render(contactFormRender);
        
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Check text content', () => {
    it('has the correct contact text content', () => {
        const {getByTestId} = render(contactFormRender);

        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    })

    it('has correct button text', () => {
        const {getByTestId} = render(contactFormRender);

        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    })
})