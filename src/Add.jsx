import React, { useState, useEffect } from 'react'

const Add = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
    console.log('Effect ran due to count or text change');
  }, [count, text]);
  
  return (
    <div>
        <p> Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <input 
        type ="text"
        value = {text}
        onChange = {(e) => setText(e.target.value)}
        placeholder='Type something...'
        />
    </div>
  );
}

export default Add