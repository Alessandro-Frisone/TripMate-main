import { Outlet } from "react-router";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Header />
      <main className="col-span-9 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
}
