import "./App.css";
import "./index.css";
import Header from "./Component/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import * as ReactDOM from "react-dom/client";
import Help from "./Component/Help";
import Body from "./Component/Body";
import ProductsMenu from "./Component/ProductsMenu";
import useOnOffStatus from "./Utils/useOnOffStatus";
import { Provider } from "react-redux";
import productstore from "./Utils/ProductStore";
import Cart from "./Component/Cart";
import ProductSliderMenu from "./Component/ProductSliderMenu";

function App() {
  const OnOffStatus = useOnOffStatus();

  if (OnOffStatus === false)
    return (
      <h1 className=" text-xl font-sans font-extrabold">
        Please Check Your Intennet Connection !!
      </h1>
    );

  return (
    <>
    <Provider store={productstore}>
    <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
      
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurants/:infoId",
        element: <ProductsMenu />,
      },
      {
        path: "/restaurant/:dattId",
        element: <ProductSliderMenu />,
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);

export default App;
