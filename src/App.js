import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./Content";
import Sidbar from "./Sidbar";



function App() {

  return (
    <BrowserRouter>
      <div className="row main">
        <Content />
        <Sidbar />
      </div>
    </BrowserRouter>

  );
}

export default App;
