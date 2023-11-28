import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DateDurationPicker from "./pages/dateDurationPicker";
import IdleDetection from "./pages/IdleDetection";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/date-picker",
      element: <DateDurationPicker />,
    },
    {
      path: "/idle-detection",
      element: <IdleDetection />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
