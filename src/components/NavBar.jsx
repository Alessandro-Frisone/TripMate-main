import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link  to="/" >HomePage</Link>
            <Link  to="/AddContact" >Add Contact</Link>
            <Link  to="/AddTrip" >Add Trip</Link>
        </nav>
    )
}