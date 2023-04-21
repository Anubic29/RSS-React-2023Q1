import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface OverlayType {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>> | (() => void);
  contentOverlay: React.ReactNode;
  setContentOverlay: Dispatch<SetStateAction<React.ReactNode>> | (() => void);
}

const OverlayContext = createContext<OverlayType>({
  isVisible: false,
  setIsVisible: () => undefined,
  contentOverlay: null,
  setContentOverlay: () => undefined,
});

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [contentOverlay, setContentOverlay] = useState<React.ReactNode>(null);

  const value = useMemo(
    () => ({
      isVisible,
      setIsVisible,
      contentOverlay,
      setContentOverlay,
    }),
    [isVisible, setIsVisible, contentOverlay, setContentOverlay]
  );

  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>;
}

export function useOverlay() {
  return useContext(OverlayContext);
}
