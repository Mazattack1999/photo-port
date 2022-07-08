import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

const mockToggleModal = jest.fn();

const modalRender = <Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(modalRender);
    })

    it('matches snapshot DOM node strcture', () => {
        const {asFragment} = render(modalRender);
        
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const {getByText} = render(modalRender);
        
        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})
