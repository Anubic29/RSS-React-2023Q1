import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

const mockSelectData = {
  title: 'country',
  values: ['Canada', 'China', 'Japan', 'Mexico'],
};

describe('Select', () => {
  it('should be in document', () => {
    render(<Select {...mockSelectData} />);

    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
  });

  it('correct data', () => {
    render(<Select {...mockSelectData} />);

    const options = screen.getAllByTestId('select-option');
    expect(options.length).toEqual(mockSelectData.values.length);
  });

  it('new class', () => {
    render(<Select {...mockSelectData} className="active" />);

    const select = screen.getByTestId('select');
    expect(select.className).toEqual(expect.stringMatching(/active/));
  });

  it('error message', () => {
    render(<Select {...mockSelectData} isValid={false} invalidMessage="Error message" />);

    const mess = screen.getByTestId('error-message');
    expect(mess).toHaveTextContent('Error message');
  });
});
