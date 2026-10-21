const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/garderie', (req, res) => res.json({ nom: "Ma Garderie", description: "Bienvenue !" }));
app.get('/api/services', (req, res) => res.json([{ id: 1, nom: "Garde" }, { id: 2, nom: "Activités" }]));

app.listen(5000, () => console.log('Backend sur le port 5000'));
