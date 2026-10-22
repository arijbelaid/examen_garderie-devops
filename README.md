# 🏡 Projet Garderie DevOps — Ma Garderie

Bienvenue sur le dépôt officiel du projet **Ma Garderie**, réalisé dans le cadre de l'épreuve pratique du Master DevOps & Cloud.

## 📋 1. Présentation de l'application et technologies

L'application est une landing page responsive pour une garderie d'enfants, connectée à une API REST.

- **Frontend :** Next.js (React) et Tailwind CSS.
- **Backend :** Node.js et Express (API REST).
- **CI/CD :** Jenkins.
- **Infrastructure :** Vagrant et Ansible.
- **Conteneurisation :** Docker et Docker Compose.
- **Gestion du code source :** Git et GitHub.
- **Registre d'images :** Docker Hub.
- **Tests automatisés :** Jest.

## 🏗️ 2. Architecture du projet et de la chaîne CI/CD

Le projet repose sur une chaîne CI/CD permettant d'automatiser la construction, les tests et le déploiement de l'application.

- **Code source :** hébergé sur GitHub.
- **Pipeline CI/CD :** le fichier `Jenkinsfile` définit les étapes de récupération du code, d'installation des dépendances, d'exécution des tests, de construction des images Docker et de publication sur Docker Hub.
- **Infrastructure as Code :** le `Vagrantfile` configure la machine virtuelle et Ansible automatise son provisioning.
- **Conteneurisation :** Docker permet de construire les images du frontend et du backend.
- **Déploiement :** le fichier `docker-compose.yml` permet de démarrer les services à partir des images Docker.

## 🚀 3. Création et provisioning de la machine virtuelle

**Remarque :** la virtualisation imbriquée (VT-x) étant bloquée par l'environnement hôte, le playbook Ansible a été exécuté sur l'hôte local pour validation.

Création de la machine virtuelle, si l'environnement le permet :

```bash
vagrant up
```

Exécution du playbook Ansible :

```bash
cd ansible
sudo ansible-playbook -i inventory.ini site.yml
```

## ⚙️ 4. Exécution du pipeline Jenkins

Le pipeline est défini dans le fichier `Jenkinsfile`, situé à la racine du projet.

1. Accéder à l'interface Jenkins : [http://192.168.159.40:8080](http://192.168.159.40:8080).
2. Ouvrir le job `garderie-pipeline`.
3. Cliquer sur **Build Now** (Lancer un build).
4. Consulter la console de sortie pour vérifier les différentes étapes du pipeline.
5. Vérifier la publication des images sur Docker Hub.

## 🔗 5. Images Docker Hub

Les images de l'application sont publiées sur Docker Hub.

- **Image Frontend :** [arijbelaid/garderie-frontend](https://hub.docker.com/r/arijbelaid/garderie-frontend)
- **Image Backend :** [arijbelaid/garderie-backend](https://hub.docker.com/r/arijbelaid/garderie-backend)

## 🐳 6. Déploiement avec Docker Compose

Le déploiement utilise le fichier `docker-compose.yml` pour démarrer les services de l'application.

Arrêter les conteneurs existants :

```bash
docker compose down
```

Démarrer l'application :

```bash
docker compose up -d
```

Vérifier l'état des conteneurs :

```bash
docker compose ps
```

Afficher les logs :

```bash
docker compose logs -f
```

## 🌐 7. Accès à l'application

L'application déployée est accessible depuis un navigateur à l'adresse suivante :

👉 [http://192.168.159.40:3000](http://192.168.159.40:3000)

> **Remarque :** cette adresse est valable si la machine est accessible sur ce réseau et si le frontend écoute sur le port `3000`.

## 📸 8. Captures d'écran — Preuves d'exécution

Les captures d'écran sont stockées dans le dossier `screenshots/` du dépôt. Elles illustrent les différentes étapes de réalisation et de déploiement du projet.

### 8.1. Installation de Docker et Jenkins

**Installation initiale :**

![Installation de Docker et Jenkins](screenshots/01_installation_docker_jenkins.png)

**Étape 2 :**

![Installation de Docker et Jenkins - Étape 2](screenshots/01_installation2_docker_jenkins.png)

**Étape 3 :**

![Installation de Docker et Jenkins - Étape 3](screenshots/01_installation3_docker_jenkins.png)

**Étape 4 :**

![Installation de Docker et Jenkins - Étape 4](screenshots/01_installation4_docker_jenkins.png)

### 8.2. Création de l'application

![Création de l'application](screenshots/02_creation_app.png)

![Création de l'application - Étape 2](screenshots/02_creation2_app.png)

### 8.3. Landing page

![Landing page de Ma Garderie](screenshots/03_landing_page.png)

![Landing page de Ma Garderie - Étape 2](screenshots/03_landing2_page.png)

### 8.4. API REST

![API REST](screenshots/04_api_rest.png.png)

![API REST - Étape 2](screenshots/04_api_rest1.png.png)

![API REST - Étape 3](screenshots/04_api_rest2.png)

### 8.5. Tests automatisés avec Jest

![Tests automatisés Jest](screenshots/05_test_jest.png)

### 8.6. Construction des images Docker

![Construction des images Docker](screenshots/06_docker_build.png)

### 8.7. Déploiement local avec Docker Compose

![Déploiement local avec Docker Compose](screenshots/07_docker_compose_local.png)

### 8.8. Configuration des identifiants Jenkins

![Configuration des identifiants Jenkins](screenshots/08_jenkins_credentials.png)

### 8.9. Publication des images sur Docker Hub

![Images Docker publiées sur Docker Hub](screenshots/09_dockerhub_images.png)

### 8.10. Configuration d'Ansible

![Configuration Ansible](screenshots/10_ansible_config.png)

![Configuration Ansible - Étape 2](screenshots/10_ansible_config2.png)

### 8.11. Exécution du playbook Ansible

![Exécution du playbook Ansible](screenshots/11_ansible_execution.png)

### 8.12. Déploiement final

![Déploiement final avec Docker Hub](screenshots/12_deploiement_final.png)

### 8.13. Application finale

![Application Ma Garderie accessible dans le navigateur](screenshots/13_application_finale.png)

## ✅ 9. Conclusion

Ce projet a permis de mettre en pratique les principaux concepts DevOps à travers une application web conteneurisée et une chaîne CI/CD automatisée.

Les principaux objectifs réalisés sont :

- Le développement d'un frontend et d'un backend communiquant via une API REST.
- L'automatisation des tests avec Jest.
- La construction des images Docker.
- L'orchestration locale des services avec Docker Compose.
- L'automatisation du provisioning avec Ansible.
- L'intégration continue et la publication des images via Jenkins et Docker Hub.
- La documentation des étapes avec des captures d'écran.

---

**Projet :** Ma Garderie — DevOps & Cloud  
**Dépôt GitHub :** [examen_garderie-devops](https://github.com/arijbelaid/examen_garderie-devops)
