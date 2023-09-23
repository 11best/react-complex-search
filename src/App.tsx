import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DateDurationPicker from "./pages/dateDurationPicker";
import GenerateCat from "./pages/GenerateCat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/generate-cat",
      element: <GenerateCat />,
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
