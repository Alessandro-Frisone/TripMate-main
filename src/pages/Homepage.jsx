import { Link } from "react-router";
import viaggi from "../data/viaggi";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-3xl mb-5">Viaggi in corso...</h1>
      <ul>
        {viaggi.map((viaggio) => {
          return (
            <li
              className="mb-5 border-1 p-2 rounded-lg shadow-sm"
              key={viaggio.id}
            >
              <Link to={`/trip/${viaggio.id}`}>
                <h2>
                  <strong>{viaggio.destinazione}</strong>
                </h2>
                <h4>Data inizio: {viaggio.dataInizio}</h4>
                <h4>Data fine: {viaggio.dataFine}</h4>
                <h5>Partecipanti: {viaggio.viaggiatori.length}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
