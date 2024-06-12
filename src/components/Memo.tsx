import { useEffect, useMemo } from "react";

export default function Memo() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  const memo = useMemo(() => {
    console.log("useMemo");
    return "memo";
  }, []);

  console.log("inside component");

  return <>{memo}</>;
}
