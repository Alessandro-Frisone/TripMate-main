import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-col gap-5 p-5 text-lg font-bold text-white bg-gradient-to-br from-sky-900 to-teal-800 shadow-xl rounded-r-[40px] border-l-4 border-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.15),_transparent)] opacity-50 blur-sm animate-pulse"></div>
      
      <Link 
        to="/" 
        className="px-5 py-2.5 rounded-xl transition-all duration-350 flex items-center gap-2.5 relative z-10 group hover:bg-sky-900 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 backdrop-blur-sm"
      >
        <span className="text-amber-400 text-2xl transition-transform group-hover:rotate-6 group-hover:scale-110">🏠</span>
        <span className="group-hover:text-amber-300 tracking-wide">HomePage</span>
      </Link>
      
      <Link 
        to="/AddContact" 
        className="px-5 py-2.5 rounded-xl transition-all duration-350 flex items-center gap-2.5 relative z-10 group hover:bg-sky-900 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 backdrop-blur-sm"
      >
        <span className="text-emerald-400 text-2xl transition-transform group-hover:rotate-6 group-hover:scale-110">📇</span>
        <span className="group-hover:text-emerald-300 tracking-wide">Add Contact</span>
      </Link>
      
      <Link 
        to="/AddTrip" 
        className="px-5 py-2.5 rounded-xl transition-all duration-350 flex items-center gap-2.5 relative z-10 group hover:bg-sky-900 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm"
      >
        <span className="text-blue-400 text-2xl transition-transform group-hover:rotate-6 group-hover:scale-110">✈️</span>
        <span className="group-hover:text-blue-300 tracking-wide">Add Trip</span>
      </Link>
    </nav>
  );
}
