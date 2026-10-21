pipeline {
    agent any

    environment {
        // Remplacez par votre nom d'utilisateur Docker Hub
        DOCKER_HUB_USER = 'arijbelaid' 
        DOCKER_HUB_REPO_FRONT = "arijbelaid/garderie-frontend"
        DOCKER_HUB_REPO_BACK = "arijbelaid/garderie-backend"
        // L'ID du credential que nous créerons à l'étape 10
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials' 
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code source...'
                // Jenkins le fait automatiquement si le job est lié au dépôt
            }
        }

        stage('Install') {
            steps {
                echo 'Installation des dépendances (Frontend & Backend)...'
                dir('frontend') {
                    sh 'npm ci'
                }
                dir('backend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Exécution des tests du frontend...'
                dir('frontend') {
                    // Cette commande arrêtera le pipeline si le test échoue
                    sh 'npm test' 
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Construction de l\'image Docker du frontend...'
                sh 'docker build -t $DOCKER_HUB_REPO_FRONT:latest ./frontend'
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Construction de l\'image Docker du backend...'
                sh 'docker build -t $DOCKER_HUB_REPO_BACK:latest ./backend'
            }
        }

        stage('Push Frontend') {
            steps {
                echo 'Publication de l\'image frontend sur Docker Hub...'
                withCredentials([usernamePassword(credentialsId: env.DOCKER_HUB_CREDENTIALS, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh 'docker push $DOCKER_HUB_REPO_FRONT:latest'
                }
            }
        }

        stage('Push Backend') {
            steps {
                echo 'Publication de l\'image backend sur Docker Hub...'
                withCredentials([usernamePassword(credentialsId: env.DOCKER_HUB_CREDENTIALS, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh 'docker push $DOCKER_HUB_REPO_BACK:latest'
                }
            }
        }
    }
}
