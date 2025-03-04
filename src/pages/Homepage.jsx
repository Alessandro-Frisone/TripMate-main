import { Link } from "react-router";
import viaggi from "../data/viaggi";

export default function Homepage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl border border-gray-100 relative z-10">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-xl flex items-center justify-center">
          <p className="text-white text-lg font-semibold">✈️ Esplora il mondo con noi!</p>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-wide mt-10">
          🌍 Viaggi in corso
        </h1>
        <ul className="space-y-6">
          {viaggi.map((viaggio) => (
            <li
              className="bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-[1.02] relative"
              key={viaggio.id}
            >
              <div className="absolute top-3 right-3 flex space-x-2">
                {viaggio.viaggiatori.length >= 5 && (
                  <div className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                    🎉 Gruppo numeroso
                  </div>
                )}
                {viaggio.viaggiatori.length === 1 && (
                  <div className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
                    🧳 Viaggio in solitaria
                  </div>
                )}
                <div className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  🏝️ Destinazione top
                </div>
              </div>
              <Link
                to={`/trip/${viaggio.id}`}
                className="block text-gray-900 hover:text-blue-500 transition duration-200"
              >
                <h2 className="text-xl font-bold mb-2 tracking-tight">
                  ✈️ {viaggio.destinazione}
                </h2>
                <p className="text-sm text-gray-700">
                  📅 <strong>Data inizio:</strong> {viaggio.dataInizio}
                </p>
                <p className="text-sm text-gray-700">
                  🏁 <strong>Data fine:</strong> {viaggio.dataFine}
                </p>
                <p className="text-sm text-gray-700">
                  👥 <strong>Partecipanti:</strong> {viaggio.viaggiatori.length}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
