import "./App.css";
import "./index.css";

import Main from "./Component/Main";
import Header from "./Component/Header";
import ShimmerUi from "./Component/ShimmerUi";
function App() {
  return (
    <>
      <div>
        <Header />
        <ShimmerUi/>
        {/* <Main /> */}
      </div>
    </>
  );
}

export default App;
