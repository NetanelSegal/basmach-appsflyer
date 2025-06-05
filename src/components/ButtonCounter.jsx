import { useState } from 'react';

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
      className='btn'
    >
      Count: {count}
    </button>
  );
}
