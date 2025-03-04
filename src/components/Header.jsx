// --------COMPONENTS--------//
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 h-screen w-60 bg-gray-900 text-white p-6 shadow-2xl border-r border-gray-700 flex flex-col justify-start">
      <NavBar />
    </header>
  );
}
