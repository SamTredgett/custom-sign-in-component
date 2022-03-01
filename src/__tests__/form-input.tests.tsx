import React from 'react';
import TextField from '../components/form-inputs/form-input.component';
import { render, screen } from '@testing-library/react';

// test('displays form label correctly', () => {
//     render(<TextField
//         placeholder={'email'}
//         type='email'
//         label='melon'
//         onChange={() => { }}
//     />);
//     const foundText = screen.getByLabelText('melon');
//     expect(foundText).toBeInTheDocument;
// });



describe('rendering input element:', () => {
    render(<TextField
        placeholder='email'
        type='email'
        label='melon'
        onChange={() => { }}
    />);
        it('should have label text "melon"', () => {
            const foundText = screen.getByLabelText('melon');
            expect(foundText).toHaveTextContent('melon');
        });
        it('should have a type of email', () => {
            const textFieldType = screen.getByPlaceholderText('email');
            expect(textFieldType).toEqual('email');
        });
});
