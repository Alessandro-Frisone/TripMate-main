import viaggi from "../data/viaggi";
import { useParams } from "react-router";

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
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600 mt-4 text-center">❌ Nessun viaggiatore trovato per questo viaggio.</p>
      )}
    </div>
  </div>
  );
}
