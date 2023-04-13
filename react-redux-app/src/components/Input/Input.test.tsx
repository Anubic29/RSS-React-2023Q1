import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Select', () => {
  it('should be in document', () => {
    render(<Input type="text" />);

    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  it('new class', () => {
    render(<Input type="text" className="active" />);

    const input = screen.getByTestId('input');
    expect(input.className).toEqual(expect.stringMatching(/active/));
  });

  it('error message', () => {
    render(<Input type="text" isValid={false} invalidMessage="Error message" />);

    const mess = screen.getByTestId('error-message');
    expect(mess).toHaveTextContent('Error message');
  });
});
