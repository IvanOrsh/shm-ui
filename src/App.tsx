import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./components/site/Layout";
import Spinner from "./components/site/Spinner";
import { ButtonPage } from "./pages/ButtonPage";
import { CardPage } from "./pages/CardPage";
import { HomePage } from "./pages/HomePage";
import { InputPage } from "./pages/InputPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="input" element={<InputPage />} />
      </Route>
    </Routes>
  );
}

export default App;
