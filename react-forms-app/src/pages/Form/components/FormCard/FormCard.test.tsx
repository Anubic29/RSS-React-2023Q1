import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const mockCardData = {
  id: 1,
  userName: 'userName',
  date: '1999-02-27',
  country: 'Ukraine',
  skills: 'JavaScript, React',
  type: 'Premium',
  file: 'C:\\fakepath\\inkognito.jpg',
};

describe('Form Card', () => {
  it('should be in document', () => {
    render(<FormCard {...mockCardData} />);

    const card = screen.getByTestId('form-card');
    expect(card).toBeInTheDocument();
  });

  it('correct data', () => {
    render(<FormCard {...mockCardData} />);

    const title = screen.getByTestId('form-card-title');
    const date = screen.getByTestId('form-card-date');
    const country = screen.getByTestId('form-card-country');
    const skills = screen.getByTestId('form-card-skills');
    const type = screen.getByTestId('form-card-type');
    const file = screen.getByTestId('form-card-file');

    expect(title).toHaveTextContent(`${mockCardData.id}. ${mockCardData.userName}`);
    expect(date).toHaveTextContent(mockCardData.date);
    expect(country).toHaveTextContent(mockCardData.country);
    expect(skills).toHaveTextContent(mockCardData.skills);
    expect(type).toHaveTextContent(mockCardData.type);
    expect(file).toHaveTextContent(mockCardData.file);
  });
});
