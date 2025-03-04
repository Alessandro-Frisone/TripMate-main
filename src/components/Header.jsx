// --------COMPONENTS--------//
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="col-span-2 bg-gradient-to-br from-sky-900 to-teal-800 text-white p-4 relative overflow-hidden border-l-4 border-emerald-500 shadow-xl">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent)] opacity-40 blur-sm animate-pulse"></div>
    
    <NavBar />
  </header>
  );
}
