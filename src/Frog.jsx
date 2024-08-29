import React, { useEffect, useState } from 'react'

const Frog = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');

    return () => {
      console.log('Cleanup on unmount or before next effect run');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
export default Frog;