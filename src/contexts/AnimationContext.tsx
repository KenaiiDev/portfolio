"use client";

import { createContext, useContext, useState, useRef } from "react";

type AnimationContextType = {
  shouldAnimate: boolean;
  pauseAnimations: () => void;
};

const AnimationContext = createContext<AnimationContextType>({
  shouldAnimate: true,
  pauseAnimations: () => {},
});

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const pauseAnimations = () => {
    setShouldAnimate(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);
  };

  return (
    <AnimationContext.Provider value={{ shouldAnimate, pauseAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimation = () => useContext(AnimationContext);
