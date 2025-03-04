import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg">
        <ul className="space-y-4 text-lg font-semibold">
          <li>
            <Link to="/" className="block hover:text-gray-400 transition duration-300">
              HomePage
            </Link>
          </li>
          <li>
            <Link to="/AddContact" className="block hover:text-gray-400 transition duration-300">
              Add Contact
            </Link>
          </li>
          <li>
            <Link to="/AddTrip" className="block hover:text-gray-400 transition duration-300">
              Add Trip
            </Link>
          </li>
        </ul>
      </nav>
    )
}