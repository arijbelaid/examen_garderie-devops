markdown
# 🏡 Projet Garderie DevOps - Ma Garderie

Bienvenue sur le dépôt officiel du projet **Ma Garderie**, réalisé dans le cadre de l'épreuve pratique Master DevOps & Cloud.

## 📋 1. Présentation de l'application et technologies
L'application est une landing page responsive pour une garderie d'enfants, connectée à une API REST.
*   **Frontend** : Next.js (React) + Tailwind CSS.
*   **Backend** : Node.js + Express (API REST).
*   **CI/CD** : Jenkins.
*   **Infrastructure** : Vagrant et Ansible.
*   **Conteneurisation** : Docker et Docker Compose.

## 🏗️ 2. Architecture du projet et de la chaîne CI/CD
*   **Code source** : Hébergé sur GitHub.
*   **Pipeline CI/CD** : Le fichier `Jenkinsfile` définit les étapes : Checkout, Install, Test, Build Docker (Frontend/Backend), et Push vers Docker Hub.
*   **Infrastructure as Code** : Le `Vagrantfile` configure la VM, et Ansible (rôle `docker`) automatise son provisioning.
*   **Déploiement** : Le fichier `docker-compose.yml` utilise les images de production pour lancer l'application.

## 🚀 3. Instructions de création et de provisioning de la VM
*Note : La virtualisation imbriquée (VT-x) étant bloquée par l'environnement hôte, le playbook a été exécuté sur l'hôte local pour validation.*

```bash
# Création de la VM (si l'environnement le permet)
vagrant up

# Provisioning avec Ansible
cd ansible
sudo ansible-playbook -i inventory.ini site.yml
⚙️ 4. Instructions d'exécution du pipeline Jenkins
Le pipeline est défini dans le fichier Jenkinsfile à la racine.

Se rendre sur l'interface Jenkins (http://192.168.159.40:8080).

Cliquer sur le job garderie-pipeline.

Cliquer sur "Lancer un build". Le pipeline construira et publiera automatiquement les images.

🔗 5. Liens vers les images Docker Hub
Image Frontend : https://hub.docker.com/r/arijbelaid/garderie-frontend

Image Backend : https://hub.docker.com/r/arijbelaid/garderie-backend

🐳 6. Instructions de déploiement avec Docker Compose
Le déploiement utilise le fichier docker-compose.yml configuré pour télécharger les images depuis Docker Hub.

bash
docker compose down
docker compose up -d
🌐 7. Adresse d'accès à l'application déployée
L'application est accessible depuis un navigateur web à l'adresse suivante :
👉 http://192.168.159.40:3000

📸 8. Captures d'écran (Preuves d'exécution)
(Note : Vérifie que tes images sont bien au format .png. Si elles sont en .jpg, remplace les extensions dans le code ci-dessous).

1. Installation des outils
https://screenshots/01_installation_docker_jenkins.png
https://screenshots/01_installation2_docker_jenkins.png
https://screenshots/01_installation3_docker_jenkins.png
https://screenshots/01_installation4_docker_jenkins.png

2. Création de l'application
https://screenshots/02_creation_app.png
https://screenshots/02_creation2_app.png

3. Landing Page
https://screenshots/03_landing_page.png
https://screenshots/03_landing2_page.png

4. API REST
https://screenshots/04_api_rest.png
https://screenshots/04_api_rest1.png
https://screenshots/04_api_rest2.png

5. Tests automatisés réussis
https://screenshots/05_test_jest.png

6. Construction des images Docker
https://screenshots/06_docker_build.png

7. Docker Compose (Local)
https://screenshots/07_docker_compose_local.png

8. Jenkins Credentials
https://screenshots/08_jenkins_credentials.png

9. Images publiées sur Docker Hub
https://screenshots/09_dockerhub_images.png

10. Configuration Ansible
https://screenshots/10_ansible_config.png
https://screenshots/10_ansible_config2.png

11. Exécution du playbook Ansible
https://screenshots/11_ansible_execution.png

12. Déploiement final avec Docker Hub
https://screenshots/12_deploiement_final.png

13. Application accessible dans le navigateur
https://screenshots/13_application_finale.png

text

### 🚀 N'oublie pas la dernière étape :
Après avoir collé ce contenu dans ton fichier `README.md` sur ta VM, fais le commit et le push final :

```bash
cd ~/garderie-devops
git add README.md screenshots/
git commit -m "Etape finale: Ajout du README complet avec toutes les captures"
git push origin main
