import { useState, useEffect } from "react";
import viaggi from "../data/viaggi";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (search === "") {
      setFilteredResults([]);
      return;
    }

    let allViaggiatori = [];
    viaggi.forEach((viaggio) => {
      viaggio.viaggiatori.forEach((viaggiatore) => {
        allViaggiatori.push({
          ...viaggiatore,
          destinazione: viaggio.destinazione,
          dataInizio: viaggio.dataInizio,
          dataFine: viaggio.dataFine,
        });
      });
    });

    const searchLower = search.toLowerCase();

    const results = allViaggiatori.filter(
      (person) =>
        (
          person.nome.toLowerCase() +
          " " +
          person.cognome.toLowerCase()
        ).includes(searchLower) ||
        person.nome.toLowerCase().includes(searchLower) ||
        person.cognome.toLowerCase().includes(searchLower)
    );

    setFilteredResults(results);
  }, [search]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <form className="flex items-center space-x-3 p-3 bg-gradient-to-br from-sky-900 to-teal-800 shadow-lg rounded-xl border-l-4 border-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.15),_transparent)] opacity-50 blur-sm animate-pulse"></div>

        <input
          className="bg-white text-gray-900 border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-80 backdrop-blur-sm"
          name="search"
          type="search"
          placeholder="🔍 Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {filteredResults.length > 0 ? (
        <ul className="bg-white text-gray-900 rounded-xl shadow-md p-3 w-96">
          {filteredResults.map((person) => (
            <li key={person.id} className="py-2 border-b last:border-0">
              <p className="font-bold">
                {person.nome} {person.cognome}
              </p>
              <p className="text-sm text-gray-600">📧 {person.email}</p>
              <p className="text-sm">
                📍 Destinazione:{" "}
                <span className="font-medium">{person.destinazione}</span>
              </p>
              <p className="text-sm">
                🗓️ {person.dataInizio} - {person.dataFine}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        search !== "" && (
          <p className="text-black text-lg font-semibold">
            ❌ Nessun risultato trovato
          </p>
        )
      )}
    </div>
  );
}
