'use client';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Activites from './components/Activites';

export default function Home() {
  const [info, setInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    // Adresse de votre backend Express dans la VM
    const API_URL = 'http://192.168.159.40:5000';

    // 1. Récupérer les infos générales
    fetch(`${API_URL}/api/garderie`)
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error("Erreur API Garderie:", err));

    // 2. Récupérer les services
    fetch(`${API_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Erreur API Services:", err));

    // 3. Récupérer les activités
    fetch(`${API_URL}/api/activites`)
      .then(res => res.json())
      .then(data => setActivites(data))
      .catch(err => console.error("Erreur API Activites:", err));
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero info={info} />
      <Services services={services} />
      <Activites activites={activites} />
    </main>
  );
}
