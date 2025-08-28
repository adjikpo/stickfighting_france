#!/bin/sh
set -e

echo "🚀 Initialisation du projet France Stick Fighting"

# Créer dans un sous-dossier pour éviter les conflits avec les fichiers existants
APP_DIR="app"
export CI=1

# S'assurer que pnpm est disponible via Corepack dans l'environnement container
corepack enable || true
corepack prepare pnpm@latest --activate || true

# Génération du squelette Next.js
npx --yes create-next-app@latest "$APP_DIR" \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-eslint \
  --use-pnpm

# Dépendances supplémentaires
cd "$APP_DIR"
pnpm add lucide-react clsx tailwind-merge framer-motion
pnpm add -D @types/node
cd ..

# Déplacer le contenu généré à la racine du repo
mv "$APP_DIR"/* .
# Déplacer aussi les fichiers cachés sans toucher . et ..
mv "$APP_DIR"/.[!.]* . 2>/dev/null || true
mv "$APP_DIR"/..?* . 2>/dev/null || true
rm -rf "$APP_DIR"

# Déplacer/ajouter le logo dans public/
mkdir -p public
if [ -f "temp_files/logo.jpg" ]; then
  cp -f "temp_files/logo.jpg" public/logo.jpg
fi

# Fusionner .gitignore custom si présent
if [ -f "temp_files/.gitignore" ]; then
  cat temp_files/.gitignore >> .gitignore 2>/dev/null || cp temp_files/.gitignore .gitignore
fi

echo "✅ Projet initialisé avec succès !"
