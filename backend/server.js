const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- DONNÉES ---

// 1. Informations générales
const infoGarderie = {
  nom: "Ma Garderie",
  description: "Une garderie chaleureuse pour vos enfants.",
  adresse: "123 Rue des Enfants, 75000 Paris",
  telephone: "01 23 45 67 89",
  email: "contact@magarderie.fr"
};

// 2. Liste des services
const services = [
  { id: 1, nom: "Garde Temps Plein", description: "Accueil de 7h à 18h du lundi au vendredi." },
  { id: 2, nom: "Garde Périscolaire", description: "Accueil avant et après l'école." },
  { id: 3, nom: "Repas Équilibrés", description: "Repas sains et faits maison." }
];

// 3. Liste des activités
const activites = [
  { id: 1, nom: "Éveil Musical", jour: "Lundi", description: "Découverte des instruments et des rythmes." },
  { id: 2, nom: "Atelier Peinture", jour: "Mercredi", description: "Expression artistique et créativité." },
  { id: 3, nom: "Parcours de Motricité", jour: "Jeudi", description: "Développement de la motricité globale." }
];

// --- ROUTES API ---

// GET /api/garderie
app.get('/api/garderie', (req, res) => {
  res.json(infoGarderie);
});

// GET /api/services
app.get('/api/services', (req, res) => {
  res.json(services);
});

// GET /api/activites
app.get('/api/activites', (req, res) => {
  res.json(activites);
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
