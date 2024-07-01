import "./App.css";
import "./index.css";

import Main from "./Component/Main";
import Header from "./Component/Header";
import ProductSlider from "./Component/ProductSlider";

function App() {
  return (
    <>
      <div>
        <Header />
        <ProductSlider />
        <Main />
      </div>
    </>
  );
}

export default App;
