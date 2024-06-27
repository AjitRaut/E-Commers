import "./App.css";
import "./index.css";

import Main from "./Component/Main";
import Header from "./Component/Header";
import Slider from "./Component/Slider";
function App() {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <Main />
      </div>
    </>
  );
}

export default App;
