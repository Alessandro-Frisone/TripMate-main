import Data from "../data/Viaggi"
export default function Homepage() {
  return (
    <div>
      <ul>
        {viaggi.map((viaggio) => {
          return(
            <li key={viaggio.id}>
              <h2>{viaggio.destinazione}</h2>
              <h4>{viaggio.dataInizio}</h4>
              <h4>{viaggio.dataFine}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
