import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay', () => {
  it('should be in document', () => {
    render(<Overlay onClose={() => {}}>Text</Overlay>);

    const overlay = screen.getByTestId('overlay');
    expect(overlay).toBeInTheDocument();
  });

  it('close overlay with back', () => {
    const Mocked = {
      onCloseHandler: () => undefined,
    };
    const spy = vi.spyOn(Mocked, 'onCloseHandler');
    render(<Overlay onClose={Mocked.onCloseHandler}>Text</Overlay>);

    const overlayBack = screen.getByTestId('overlay-back');
    fireEvent.click(overlayBack);

    expect(spy).toHaveBeenCalled();
  });

  it('close overlay with btn close', () => {
    const Mocked = {
      onCloseHandler: () => undefined,
    };
    const spy = vi.spyOn(Mocked, 'onCloseHandler');
    render(<Overlay onClose={Mocked.onCloseHandler}>Text</Overlay>);

    const overlayClose = screen.getByTestId('overlay-close');
    fireEvent.click(overlayClose);

    expect(spy).toHaveBeenCalled();
  });
});
