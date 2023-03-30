import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("pages/Home"));
const TechPage = lazy(() => import("pages/Tech"));
const BusinessPage = lazy(() => import("pages/Business"));
const HealthPage = lazy(() => import("pages/Health"));
const SportsPage = lazy(() => import("pages/Sports"));
const SciencePage = lazy(() => import("pages/Science"));
const NotFoundPage = lazy(() => import("pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/technology",
    element: <TechPage />,
  },
  {
    path: "/business",
    element: <BusinessPage />,
  },
  {
    path: "/health",
    element: <HealthPage />,
  },
  {
    path: "/sports",
    element: <SportsPage />,
  },
  {
    path: "/science",
    element: <SciencePage />,
  },
]);

const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
