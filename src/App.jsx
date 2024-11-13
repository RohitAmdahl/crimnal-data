import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
const CrimePage = lazy(() => import("./pages/CriminalPage"));
const CrimeDetail = lazy(() => import("./pages/CrimeDetail"));
const Offense = lazy(() => import("./pages/OffensePage"));
const Victims = lazy(() => import("./pages/VictimsPage"));
export default function App() {
  return (
    <>
      <Suspense fallback={<div>--------------loading--------------</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CrimePage />} />
            <Route path="/crime/:id" element={<CrimeDetail />} />
            <Route path="/offense" element={<Offense />} />
            <Route path="/victim" element={<Victims />} />
            <Route
              path="*"
              element={<div className="bg-red text-4xl">Route not found</div>}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
