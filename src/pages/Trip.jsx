import viaggi from "../data/viaggi";
import { useParams } from "react-router";
import { Link } from "react-router";

export default function Trip() {
  const { id } = useParams();
  const viaggio = viaggi.find((e) => e.id === parseInt(id));

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
    <div className="max-w-2xl w-full p-8 bg-white shadow-2xl rounded-2xl border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">{viaggio.destinazione}</h1>
      <p className="text-lg text-gray-700 flex items-center">📅 <strong className="ml-2">Data di inizio:</strong> {viaggio.dataInizio}</p>
      <p className="text-lg text-gray-700 flex items-center">🏁 <strong className="ml-2">Data di fine:</strong> {viaggio.dataFine}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 border-b-2 pb-2 border-gray-300">Viaggiatori</h2>
      {viaggio.viaggiatori.length > 0 ? (
        <div className="mt-4 space-y-4">
          {viaggio.viaggiatori.map((viaggiatore) => (
            <div key={viaggiatore.id} className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
              <p className="text-lg font-medium text-gray-900">{viaggiatore.nome} {viaggiatore.cognome}</p>
              <p className="text-sm text-gray-700">📧 <strong>Email:</strong> {viaggiatore.email}</p>
              <p className="text-sm text-gray-700">📱 <strong>Numero di telefono:</strong> {viaggiatore.telefono}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600 mt-4 text-center">❌ Nessun viaggiatore trovato per questo viaggio.</p>
      )}
       <Link 
            to={`/`} 
            className="mt-5 px-4 py-2 rounded-lg text-sm transition-all duration-350 flex items-center gap-2 relative z-10 group bg-gradient-to-br from-sky-900 to-teal-800 shadow-md border-l-4 border-emerald-600 hover:bg-sky-900 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 backdrop-blur-sm text-white font-semibold"
          >
            <span className="text-emerald-400 text-xl transition-transform group-hover:rotate-6 group-hover:scale-110">⬅️</span>
            <span className="group-hover:text-emerald-300 tracking-wide">Indietro</span>
          </Link>
    </div>
  </div>
  );
}
