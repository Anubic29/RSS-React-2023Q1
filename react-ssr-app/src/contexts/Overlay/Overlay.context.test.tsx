import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { OverlayProvider, useOverlay } from './Overlay.context';

describe('OverlayContext', () => {
  it('default values are set correctly', () => {
    const TestComponent = () => {
      const overlay = useOverlay();
      expect(overlay.isVisible).toBe(false);
      expect(typeof overlay.setIsVisible).toBe('function');
      expect(overlay.contentOverlay).toBe(null);
      expect(typeof overlay.setContentOverlay).toBe('function');
      return null;
    };

    render(
      <OverlayProvider>
        <TestComponent />
      </OverlayProvider>
    );
  });

  it('values are updated correctly when setIsVisible and setContentOverlay are called', () => {
    const TestComponent = () => {
      const overlay = useOverlay();
      return (
        <>
          <button
            data-testid="open-button"
            onClick={() => {
              overlay.setIsVisible(true);
              overlay.setContentOverlay(<div data-testid="overlay-content">Test</div>);
            }}
          >
            Open Overlay
          </button>
          {overlay.isVisible && <div data-testid="overlay">{overlay.contentOverlay}</div>}
        </>
      );
    };

    const { getByTestId } = render(
      <OverlayProvider>
        <TestComponent />
      </OverlayProvider>
    );

    const openButton = getByTestId('open-button');

    fireEvent.click(openButton);

    const overlayModal = getByTestId('overlay');
    expect(overlayModal).toBeInTheDocument();
    const overlayContent = getByTestId('overlay-content');
    expect(overlayContent).toBeInTheDocument();
    expect(overlayContent).toHaveTextContent('Test');
  });
});
