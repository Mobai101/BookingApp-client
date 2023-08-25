import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { homeLoader } from "./pages/Home";
import Detail, { detailLoader } from "./pages/Detail";
import Search from "./pages/Search";
import Root, { rootLoader } from "./pages/Root";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import Reserve, { reserveLoader } from "./pages/Reserve";
import Test, { testLoader } from "./pages/Test";
import Transaction, { transactionLoader } from "./pages/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "detail/:hotelId",
        element: <Detail />,
        loader: detailLoader,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "reserve/:hotelId",
        element: <Reserve />,
        loader: reserveLoader,
      },
      {
        path: "transactions",
        element: <Transaction />,
        loader: transactionLoader,
      },
      {
        path: "test",
        element: <Test />,
        loader: testLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
