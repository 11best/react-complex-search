import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MacSearch from "./pages/macSearch";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MacSearch />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
