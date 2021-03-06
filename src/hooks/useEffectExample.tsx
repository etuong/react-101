// The useEffect Hook allows you to perform side effects in your components.
// useEffect(<function>, <dependency>)
// If <dependency> is undefined, useEffect runs on every render
// If <dependency> is [], useEffect runs on first render
// If <dependency> is [blah], useEffect runs any time any dependency value changes

import { useEffect, useState } from "react";

interface ExampleProps {
  num: number;
}

const Example = (prop: ExampleProps) => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [numberFromParent, setNumberFromParent] = useState<number>(prop.num);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount2((count2) => count2 + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setNumberFromParent(prop.num);
  }, [prop]);

  return (
    <>
      <h1>I've rendered {count} times!</h1>
      <h1>I am rendering {count2} times!</h1>
      <h1>My parent gave me {numberFromParent}</h1>
    </>
  );
};

export default Example;
