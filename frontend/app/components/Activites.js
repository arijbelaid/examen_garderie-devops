export default function Activites({ activites }) {
  if (!activites || activites.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Nos Activités</h2>
        <div className="flex flex-col gap-4">
          {activites.map((act) => (
            <div key={act.id} className="p-4 bg-white rounded-lg shadow border-l-4 border-blue-500 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{act.nom}</h3>
                <p className="text-gray-600">{act.description}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm">
                {act.jour}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
