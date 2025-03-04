import viaggi from "../data/viaggi";
import { useParams } from "react-router";

export default function Trip() {
  const { id } = useParams();
  const viaggio = viaggi.find((e) => e.id === parseInt(id));

  return (
    <div>
      <h1 className="text-3xl mb-5">{viaggio.destinazione}</h1>
      <p>Data di inizio: {viaggio.dataInizio}</p>
      <p>Data di fine: {viaggio.dataFine}</p>

      <h2 className="text-2xl mt-5">Viaggiatori:</h2>
      {viaggio.viaggiatori.length > 0 ? (
        viaggio.viaggiatori.map((viaggiatore) => (
          <div key={viaggiatore.id}>
            <p>
              {viaggiatore.nome} {viaggiatore.cognome}
            </p>
            <p>Email: {viaggiatore.email}</p>
          </div>
        ))
      ) : (
        <p>Nessun viaggiatore trovato per questo viaggio.</p>
      )}
    </div>
  );
}
