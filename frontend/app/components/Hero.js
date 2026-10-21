export default function Hero() {
  return (
    <section id="accueil" className="bg-blue-50 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop" 
          alt="Enfants à la garderie" 
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Bienvenue à Ma Garderie
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Un espace chaleureux, sécurisé et stimulant où vos enfants s'épanouissent au quotidien. 
          Notre équipe dévouée veille sur eux avec amour et professionnalisme.
        </p>
        <a href="#services" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
          Découvrir nos services
        </a>
      </div>
    </section>
  );
}
