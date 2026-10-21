export default function Services({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Nos Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const icones = ["⏰", "🎒", "🥗"]; // Petites icônes selon le service
            return (
              <div key={service.id} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition text-center bg-gray-50">
                <div className="text-4xl mb-4">{icones[index % icones.length]}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.nom}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
