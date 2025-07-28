import { useRef } from "react";
import A from "./components/A";
import Navbar from "./components/Navbar";
import B from "./components/B";

const App = () => {
  const aRef = useRef({});

  return (
    <main>
      <Navbar tarRef={aRef} />
      <A forRef={aRef} />
      <B forRef={aRef} />
    </main>
  );
};

export default App;
