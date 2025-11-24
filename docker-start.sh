#!/bin/bash

# Script pour démarrer l'application SNova Showcase avec Docker

echo "🚀 Démarrage de SNova Showcase avec Docker..."

# Vérifier si Docker est en cours d'exécution
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker n'est pas en cours d'exécution."
    echo "   Veuillez démarrer Docker Desktop et réessayer."
    exit 1
fi

# Construire l'image si nécessaire
echo "📦 Construction de l'image Docker..."
docker-compose build

# Démarrer les conteneurs
echo "▶️  Démarrage des conteneurs..."
docker-compose up -d

# Attendre que le conteneur soit prêt
echo "⏳ Attente du démarrage du serveur..."
sleep 3

# Vérifier le statut
if docker-compose ps | grep -q "Up"; then
    echo "✅ Application démarrée avec succès!"
    echo "🌐 Accédez à l'application sur: http://localhost:7001"
    echo ""
    echo "Commandes utiles:"
    echo "  - Voir les logs: docker-compose logs -f"
    echo "  - Arrêter: docker-compose down"
    echo "  - Redémarrer: docker-compose restart"
else
    echo "❌ Erreur lors du démarrage. Vérifiez les logs avec: docker-compose logs"
    exit 1
fi

