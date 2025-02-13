import React, { useState } from 'react';

const StateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>State Example</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StateExample;
