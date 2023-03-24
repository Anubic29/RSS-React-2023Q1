import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form page', () => {
  it('should be in document', () => {
    render(<Form />);

    const formPage = screen.getByTestId('form-page');
    expect(formPage).toBeInTheDocument();
  });

  it('submits the form with invalid input', () => {
    render(<Form />);

    const userNameInput = screen.getByLabelText('Username');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(submitButton);

    const errorMessage1 = screen.getByText("Username can't be empty");
    expect(errorMessage1).toBeInTheDocument();
    const errorMessage2 = screen.getByText("Date can't be empty");
    expect(errorMessage2).toBeInTheDocument();
    const errorMessage3 = screen.getByText('You must select a country');
    expect(errorMessage3).toBeInTheDocument();

    fireEvent.change(userNameInput, { target: { value: 'as' } });
    fireEvent.click(submitButton);

    const errorMessage4 = screen.getByText('Username must be longer than 3 letters');
    expect(errorMessage4).toBeInTheDocument();

    const emptyMessage = screen.getByTestId('empty-message');
    expect(emptyMessage).toBeInTheDocument();
  });

  it('submits the form with valid input', () => {
    render(<Form />);

    const userNameInput = screen.getByLabelText('Username') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Birthday') as HTMLInputElement;
    const countrySelect = screen.getByLabelText('Country') as HTMLSelectElement;
    const firstCheck = screen.getByLabelText('HTML') as HTMLInputElement;
    const switchInput = screen.getByTestId('switch') as HTMLInputElement;
    const fileInput = screen.getByLabelText('File') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(userNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '2000-01-01' } });
    fireEvent.change(countrySelect, { target: { value: 'USA' } });
    fireEvent.click(firstCheck);
    fireEvent.click(switchInput);
    fireEvent.click(submitButton);

    expect(userNameInput.value).toEqual('');
    expect(dateInput.value).toEqual('');
    expect(countrySelect.value).toEqual('');
    expect(firstCheck.checked).toEqual(false);
    expect(switchInput.checked).toEqual(false);
    expect(fileInput.value).toEqual('');

    fireEvent.change(userNameInput, { target: { value: 'Freddy Mora' } });
    fireEvent.change(dateInput, { target: { value: '2012-05-11' } });
    fireEvent.change(countrySelect, { target: { value: 'France' } });
    fireEvent.click(submitButton);

    expect(userNameInput.value).toEqual('');
    expect(dateInput.value).toEqual('');
    expect(countrySelect.value).toEqual('');
    expect(firstCheck.checked).toEqual(false);
    expect(switchInput.checked).toEqual(false);
    expect(fileInput.value).toEqual('');

    const submittedCard = screen.getAllByTestId('form-card');
    expect(submittedCard.length).toEqual(2);
  });
});
