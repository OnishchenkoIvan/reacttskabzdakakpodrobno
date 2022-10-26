import React, { useMemo, useState, useEffect } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  const [counter, setCounter] = useState(1);

  console.log("SimpleExample");

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
  });
  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)");
    document.title = counter.toString();
  }, []);
  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello, {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SimpleExample");

  // let a = new Date();
  // let hour = a.getHours();
  // let minutes = a.getMinutes();
  // let seconds = a.getSeconds();

  useEffect(() => {
    setInterval(() => {
      setCounter((state) => state + 1);
    }, 1000);
  }, []);

  return (
    <>
      {/*Hello, counter: {counter} - fake: {hour}:{minutes}:{seconds}*/}
      {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
      {/*<button onClick={() => setCounter(counter + 1)}>count+</button>*/}
    </>
  );
};
