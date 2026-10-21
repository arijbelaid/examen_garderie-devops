export default function Hero({ info }) {
  if (!info) return <div className="text-center py-20 font-bold">Chargement des informations...</div>;

  return (
    <section id="accueil" className="bg-blue-50 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop" 
          alt="Enfants à la garderie" 
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Bienvenue à {info.nom}
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          {info.description}
        </p>
        <p className="text-md text-gray-500 mb-8 font-semibold">
          📍 {info.adresse}
        </p>
        <a href="#services" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
          Découvrir nos services
        </a>
      </div>
    </section>
  );
}
