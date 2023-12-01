import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DateDurationPicker from "./pages/dateDurationPicker";
import RandomCat from "./pages/RandomCat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "generate-cat",
      children: [
        { index: true, element: <RandomCat /> },
        {
          path: "random-cat",
          element: <RandomCat />,
        },
      ],
    },
    {
      path: "/date-picker",
      element: <DateDurationPicker />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
