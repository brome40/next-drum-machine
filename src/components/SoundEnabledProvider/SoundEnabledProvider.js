'use client'
import React, { createContext, useContext, useState } from 'react';

const SoundEnabledContext = createContext();

// Context
function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return <SoundEnabledContext.Provider
    value={{ soundEnabled, setSoundEnabled }}
  >
    {children}
  </SoundEnabledContext.Provider>;
}

// Custom Hook
export function useSoundEnabled() {
  const data = useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without a SoundEnabledProvider'
    );
  }

  return data;
}

export default SoundEnabledProvider;
