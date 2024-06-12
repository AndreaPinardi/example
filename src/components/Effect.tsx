import React, { useEffect, useMemo, useState } from "react";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const obj = { id: 1, value: "1" };

  //const obj = useMemo(() => ({ id: 1, value: "1" }), []);

  return (
    <>
      <button onClick={() => setCounter((c) => c + 1)}>update count</button>
      {counter}
      <Child obj={obj} />
    </>
  );
};

const Child = ({ obj }) => {
  useEffect(() => {
    console.log("use effect");
  }, [obj]);

  // useEffect(() => {
  //   console.log("use effect");
  // }, [obj.id]);

  return <div>Child</div>;
};

export default Parent;
