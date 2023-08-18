import { useEffect, useState } from 'react';
import { register } from './register';

export default function Hello() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (count >= 5) setResult(`Congrats you are clicked 5 times`);
  }, [count]);

  return (
    <div style={{ color: 'red' }}>
      <p>React Remote App Click Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add Count</button>
      <p>{result}</p>
    </div>
  );
}

register(Hello, 'remotereact-hello');
