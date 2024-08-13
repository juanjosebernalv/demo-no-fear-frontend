import React, { useState, useEffect, useSyncExternalStore } from 'react';

// External store
const createStore = () => {
  let state = 0;
  const listeners = new Set<() => void>();

  const getState = () => state;

  const setState = (newState: number) => {
    state = newState;
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};

const store = createStore();

const ExternalStoreText = () => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  const increment = () => {
    store.setState(state + 1);
  };

  return (
    <div>
      <h1>External Store Text</h1>
      <p>Current state: {state}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExternalStoreText;