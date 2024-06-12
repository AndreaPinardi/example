import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Counter1, Counter2, Counter3 } from "./components/State";
import Parent from "./components/Effect";
import Memo from "./components/Memo";
import List from "./components/List";
import SlowList from "./components/SlowList";

function App() {
  return (
    <>
      {/* <Memo /> */}
      {/* <Parent /> */}
      {/* <Lazy /> */}
      <div style={{ display: "flex" }}>
        <List />
        <SlowList />
      </div>
    </>
  );
}

export default App;
