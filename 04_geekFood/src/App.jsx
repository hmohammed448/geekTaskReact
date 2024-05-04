
import Quote from "./Pages/Quote";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  const router1 = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/quote",
          element: <Quote />,
        },
        {
          path: "/foods",
          element: <Home />,
        },
        {
          path: "/restaurants",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>

      <RouterProvider router={router1} />
    
    </>
  );
}

export default App;
