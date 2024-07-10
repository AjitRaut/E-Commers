import "./App.css";
import "./index.css";
import Header from "./Component/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import * as ReactDOM from "react-dom/client";
import Help from "./Component/Help";
import Body from "./Component/Body";
import ProductsMenu from "./Component/ProductsMenu";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        
      </div>
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
        path: "/restaurant/:id",
        element: <ProductsMenu />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);

export default App;
