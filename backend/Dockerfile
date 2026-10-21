# Étape 1 : Dépendances
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Étape 2 : Runner de production
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Créer un utilisateur non-root pour la sécurité
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

# Copier uniquement les dépendances de production
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs package.json ./
COPY --chown=nodejs:nodejs server.js ./

USER nodejs
EXPOSE 5000
CMD ["node", "server.js"]
