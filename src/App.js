import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  const [activeItem, setActiveItem] = useState("");
  const [mode, setMode] = useState("appmode");
  return (
    <div className="App">
      <div className="topbar">
        <Main setMode={setMode} setActiveItem={setActiveItem}/>
      </div>
      <SideBar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        mode={mode}
      />
    </div>
  );
}

export default App;
