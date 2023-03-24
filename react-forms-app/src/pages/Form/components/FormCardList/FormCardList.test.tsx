import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCardList from './FormCardList';
import { FormCardType } from 'types/CardType';

const mockCardListData: FormCardType[] = [
  {
    userName: 'userName',
    date: '1999-02-27',
    country: 'Ukraine',
    skills: 'HTML, CSS',
    type: 'Basic',
    file: 'C:\\fakepath\\inkognito.jpg',
  },
  {
    userName: 'Rome',
    date: '0564-12-12',
    country: 'Valhalla',
    skills: 'JavaScript, React',
    type: 'Premium',
    file: 'C:\\fakepath\\Yul.jpg',
  },
];

describe('CardList', () => {
  it('should be in document', () => {
    render(<FormCardList cards={mockCardListData} />);

    const cardList = screen.getByTestId('card-list');
    expect(cardList).toBeInTheDocument();
  });

  it('correct list', () => {
    render(<FormCardList cards={mockCardListData} />);

    const cards = screen.getAllByTestId('form-card');
    expect(cards.length).toEqual(mockCardListData.length);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      const title = card.querySelector('[data-testid="form-card-title"]');
      const date = card.querySelector('[data-testid="form-card-date"]');
      const country = card.querySelector('[data-testid="form-card-country"]');
      const skills = card.querySelector('[data-testid="form-card-skills"]');
      const type = card.querySelector('[data-testid="form-card-type"]');
      const file = card.querySelector('[data-testid="form-card-file"]');

      expect(title).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(country).toBeInTheDocument();
      expect(skills).toBeInTheDocument();
      expect(type).toBeInTheDocument();
      expect(file).toBeInTheDocument();

      expect(title).toHaveTextContent(`${i + 1}. ${mockCardListData[i].userName}`);
      expect(date).toHaveTextContent(mockCardListData[i].date);
      expect(country).toHaveTextContent(mockCardListData[i].country);
      expect(skills).toHaveTextContent(mockCardListData[i].skills);
      expect(type).toHaveTextContent(mockCardListData[i].type);
      expect(file).toHaveTextContent(mockCardListData[i].file);
    }
  });

  it('empty list', () => {
    render(<FormCardList cards={[]} />);

    const emptyListMessage = screen.getByTestId('empty-message');
    expect(emptyListMessage).toBeInTheDocument();
  });
});
