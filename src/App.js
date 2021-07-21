import { useState } from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Switch from "./components/Switch";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Reset from "./components/Reset";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="col-1">
          <Switch
            switch1={switch1}
            switch2={switch2}
            switch3={switch3}
            setSwitch1={setSwitch1}
            setSwitch2={setSwitch2}
            setSwitch3={setSwitch3}
          />
        </div>
        <div className="col-2">
          <Reset
            switch1={switch1}
            switch2={switch2}
            switch3={switch3}
            setSwitch1={setSwitch1}
            setSwitch2={setSwitch2}
            setSwitch3={setSwitch3}
          />
        </div>
        <div className="col-3">
          <Result switch1={switch1} switch2={switch2} switch3={switch3} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
