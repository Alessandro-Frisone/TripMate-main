// --------PAGES--------//
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Homepage";
import Trip from "./pages/Trip";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/trip/:id" element={<Trip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
