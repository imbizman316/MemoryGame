import React from 'react';

export default function Clock() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    }

  },[])
  

  return (
    <p>{counter} seconds have passed</p>
  )
}