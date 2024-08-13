import React, { useState, useCallback } from 'react';

const CallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const fibonacci = useCallback((n: number): number => {
    if (n <= 1 || n > 50) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }, []);

  const handleCalculate = () => {
    setResult(fibonacci(number));
  };

  return (
    <div>
      <h1>CallbackTest</h1>
      <input
        type="number"
        value={number}
        max={50}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Fibonacci of {number} is {result}</p>
      {number > 50 && <p>Number is too large</p>}
    </div>
  );
};

export default CallbackExample;