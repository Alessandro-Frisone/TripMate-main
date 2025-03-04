// --------PAGES--------//
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefualtLayout";
import HomePage from "./pages/Homepage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
        <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
