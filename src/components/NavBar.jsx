import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">HomePage</Link> <br />
      <Link to="/AddContact">Add Contact</Link> <br />
      <Link to="/AddTrip">Add Trip</Link> <br />
    </nav>
  );
}
