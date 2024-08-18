import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorView from "./Views/ErrorView";
import MainLayout from "./Layouts/MainLayout";

import { LanguageProvider } from './Contexts/LanguageContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <ComponentView />, 
      // },
      {
        path: "*", 
        element: <ErrorView />,
      },
    ],
  },
]);

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </LanguageProvider>
  );
}

export default App;
