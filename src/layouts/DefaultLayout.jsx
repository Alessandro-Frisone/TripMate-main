import { Outlet } from "react-router";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function DefaultLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
  <Header />

  <main className="col-span-9 flex flex-col gap-6 p-6 bg-white">
    <div className="flex gap-6">
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="w-96">
        <SearchBar />
      </div>
    </div>
  </main>
</div>

  );
}
