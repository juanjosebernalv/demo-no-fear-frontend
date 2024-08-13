import React, { useState, useMemo } from 'react';

const MemoExample = () => {
  const [number, setNumber] = useState(0);

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    if (isNaN(n)) return 0;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fibResult = useMemo(() => fibonacci(number), [number]);

  return (
    <div>
      <h1>MemoTest</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <p>Fibonacci of {number} is {fibResult}</p>
    </div>
  );
};

export default MemoExample;