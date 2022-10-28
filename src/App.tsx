import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const HeaderLayout = React.lazy(() => import('./components/layouts/HeaderLayout'))
const MenuLayout = React.lazy(() => import('./components/layouts/MenuLayout'))

function App() {
  const router = createBrowserRouter([
    {
      element: <React.Suspense fallback={<>...</>}> <HeaderLayout /> </React.Suspense>,
      children: [
        {
          path: "/",
          element: <div>Hello</div>,
        },
        {
          path: '/foo',
          element: <div>foo</div>,
        },
        {
          path: '/bar',
          element: <div>bar</div>,
        }
      ],
    },
    {
      element: <React.Suspense fallback={<>...</>}> <MenuLayout /> </React.Suspense>,
      path: 'menu'
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
