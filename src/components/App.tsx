import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { lazy, Suspense } from "react";
import React from "react";

const HomePage = lazy(() => import("../pages/HomePage"));

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
