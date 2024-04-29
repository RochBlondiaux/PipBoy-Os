import { React, useState } from "react";
import Loader from "./Loader";
import "./../assets/css/style.css";

function App() {
  const [isLoading, setLoading] = useState(true);

  if (isLoading) {
    return <Loader setLoading={setLoading} />;
  }

  return (
    <div>
      <p className="text-green-base">
        Hello world!
      </p>
    </div>
  );
}

export default App;
