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

export const SetIntervalExample = () => {
  const [counter, setCounter] = useState(1);

  console.log("SimpleExample");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((state) => state + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>Hello, counter: {counter}</>;
};

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);

  console.log("Component rendered");

  useEffect(() => {
    console.log("effect occured");
    return () => {
      console.log("RESET effect");
    };
  }, []);

  const inCrease = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      Hello, counter: {counter}
      <button onClick={inCrease}>+</button>
    </>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");

  console.log("Component rendered" + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.code);
      setText((state) => state + e.code);
    };
    window.addEventListener("keypress", handler);
    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, []);

  return <>Typed text: {text}</>;
};

export const SetTimeoutExample = () => {
  const [text, setText] = useState("");

  console.log("Component rendered" + text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("timeout expired");
      setText("3seconds passed");
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return <>Typed text: {text}</>;
};
