# 💎 Portfolio Hervé Noukpo - Full Stack Developer

Portfolio professionnel avec thème **terminal CLI** pour développeur Ruby on Rails & JavaScript.

## 👨‍💻 À Propos

**Noukpo Hervé Houndjetode**  
Full Stack Developer | Ruby on Rails & JavaScript Specialist

- 🎓 Master Expert Architecture des Logiciels (IMIE Paris)
- 💼 6+ années d'expérience en développement full-stack
- 🌟 Spécialisé en Ruby on Rails, JavaScript/TypeScript, API REST
- 🤖 Expert en intégrations IA (OpenAI API)
- 📍 Chessy (77700), France

## 🎯 Statut Actuel

✅ **Disponible pour stage alterné**  
📅 Rythme: 1 semaine cours / 3 semaines entreprise  
⏰ Disponibilité immédiate

## 🚀 Installation Rapide

### 1. Créer le dépôt GitHub

```bash
# Nom du dépôt
noukpoherve.github.io
```

1. Allez sur [GitHub.com](https://github.com)
2. Créez un nouveau dépôt **public**
3. Nommez-le exactement: `noukpoherve.github.io`
4. Cochez "Add a README"
5. Créez le dépôt

### 2. Activer GitHub Pages

1. Dans votre dépôt: **Settings** → **Pages**
2. Source: **main** branch
3. Save

✅ Votre portfolio sera accessible à: `https://noukpoherve.github.io/`

### 3. Uploader les fichiers

**Fichiers fournis:**
- `index.html` - Page principale personnalisée avec vos infos
- `style.css` - Styles terminal
- `script.js` - Animations et interactivité
- `.gitignore` - Configuration Git

**Via l'interface GitHub:**
1. Cliquez sur "Add file" → "Upload files"
2. Glissez-déposez les 4 fichiers
3. Commit changes

**Via Git (ligne de commande):**
```bash
git clone https://github.com/noukpoherve/noukpoherve.github.io.git
cd noukpoherve.github.io

# Copiez les fichiers téléchargés dans ce dossier

git add .
git commit -m "🚀 Initial commit - Portfolio Terminal"
git push origin main
```

### 4. Ajouter votre CV

Uploadez votre `Noukpo_CV_Generale.pdf` dans le dépôt.

## 📊 Contenu du Portfolio

### ✨ Sections Incluses

1. **Hero Terminal** 
   - Animation typing avec vos commandes favorites
   - Liens directs vers CV, LinkedIn, Email
   - Statut de disponibilité

2. **Compétences Techniques** (Format JSON)
   - **Backend:** Ruby on Rails (95%), Python, REST API
   - **Frontend:** React/Next.js, Stimulus.js, TypeScript
   - **Database:** PostgreSQL, MongoDB, Supabase
   - **DevOps:** Docker, Heroku, AWS, CI/CD
   - **AI & Tools:** OpenAI API, Algolia, ElasticSearch
   - **CMS:** WordPress (développement thèmes/plugins)

3. **Expérience Professionnelle**
   - **TAMA** (2024-2025) - Développeur Full Stack
   - **Procurement Freelancers** (2019-2024) - Senior Developer
   - **Intside** (2016-2019) - Full Stack Developer

4. **Formation**
   - Master Expert Architecture des Logiciels (IMIE Paris, en cours)
   - Master Sécurité Informatique (ESGIS, 2024)
   - Licence Architecture Logiciel (ESGIS, 2015)

5. **Projets Réalisés**
   - **liretama.com** - E-commerce livres numériques
   - **procurementfreelancers.com** - Plateforme freelances
   - **WordPress Solutions** - Thèmes et plugins custom
   - **APIs & Microservices** - Architecture RESTful

6. **Contact**
   - Email: noukpoherve@hotmail.com
   - Téléphone: +33 6 36 38 60 23
   - LinkedIn: [/in/noukpohervehoundjetode](https://www.linkedin.com/in/noukpohervehoundjetode/)

## 🎨 Personnalisation

### Changer les couleurs

Dans `style.css`, ligne 10:

```css
:root {
    --terminal-text: #00ff41;      /* Vert Matrix (actuel) */
    --terminal-bg: #0a0e17;        /* Fond noir */
    --terminal-prompt: #ff6b6b;    /* Prompt rouge */
    --terminal-command: #4ecdc4;   /* Commandes cyan */
}
```

**Thèmes alternatifs suggérés:**

```css
/* Ruby Red Theme (pour Ruby on Rails) */
--terminal-text: #cc0000;
--terminal-bg: #1a0000;
--terminal-prompt: #ff0000;
--terminal-command: #ff6666;

/* Blue Professional */
--terminal-text: #00d9ff;
--terminal-bg: #0a0e27;
--terminal-prompt: #0080ff;
--terminal-command: #00d9ff;
```

### Modifier vos projets

Dans `index.html`, section Projects (ligne ~500):

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">📚</div>
        <h3 class="project-name">Nom du Projet</h3>
    </div>
    <div class="project-description">
        <p>Description...</p>
    </div>
    <!-- Ajoutez vos propres projets -->
</div>
```

### Ajouter des compétences

Dans `index.html`, section Skills (ligne ~150):

```html
<div class="skill-item">
    <span class="skill-icon">💎</span>
    <span class="skill-name">Ruby on Rails</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
    </div>
    <span class="skill-percent">95%</span>
</div>
```

## 🎮 Fonctionnalités

### Easter Eggs Console

Ouvrez la console (F12) et tapez:

```javascript
about()      // Affiche vos informations
skills()     // Liste vos compétences
projects()   // Affiche vos projets
contact()    // Montre vos contacts
```

### Commandes Terminal Animées

Le terminal affiche automatiquement des commandes qui changent:
- `rails server`
- `git push origin main`
- `docker-compose up`
- `bundle install`
- `npm run dev`

Personnalisez dans `script.js`, ligne 40:

```javascript
const commands = [
    'rails server',
    'git push origin main',
    // Ajoutez vos commandes préférées
];
```

## 📱 Responsive

Le portfolio s'adapte parfaitement à tous les écrans:
- 🖥️ Desktop (1920px+)
- 💻 Laptop (1366px)
- 📱 Tablette (768px)
- 📱 Mobile (375px)

## 🔗 Liens Importants

### Vos Projets
- 📚 **TAMA:** [liretama.com](https://liretama.com)
- 💼 **Procurement Freelancers:** [procurementfreelancers.com](https://procurementfreelancers.com)

### Profils Sociaux
- 🔗 **LinkedIn:** [linkedin.com/in/noukpohervehoundjetode](https://www.linkedin.com/in/noukpohervehoundjetode/)
- 💻 **GitHub:** À configurer avec vos repositories

## 💡 Conseils pour Votre Recherche de Stage

### Mettez en avant vos forces

1. **Ruby on Rails Expert (95%)**
   - 6+ années d'expérience
   - Architecture API RESTful
   - Intégrations complexes

2. **Intégrations IA**
   - OpenAI API (ChatGPT)
   - Cas d'usage concrets
   - Optimisation de processus

3. **Full Stack Polyvalent**
   - Frontend: React, Next.js, Stimulus
   - Backend: Rails, Python
   - DevOps: Docker, CI/CD

### Ajoutez des metrics

Sur vos projets, quantifiez vos résultats:
- "Réduction de 40% du temps de traitement"
- "API gérant 10K+ requêtes/jour"
- "Amélioration de 60% des performances"

### Portfolio comme démonstration

Ce portfolio terminal démontre:
- ✅ Maîtrise des outils de développeur
- ✅ Attention aux détails
- ✅ Créativité technique
- ✅ Compétences frontend

## 🎯 Next Steps

1. ✅ Créer le dépôt GitHub
2. ✅ Uploader les fichiers
3. ✅ Vérifier que le site fonctionne
4. ✅ Ajouter votre CV PDF
5. ✅ Partager sur LinkedIn avec post:

```
🚀 Mon nouveau portfolio est en ligne !

Développeur Full Stack Ruby on Rails & JavaScript avec 6+ ans d'expérience.
Actuellement en Master Expert Architecture des Logiciels à l'IMIE Paris.

🔍 Disponible pour stage alterné (1 sem cours / 3 sem entreprise)

Spécialisations:
💎 Ruby on Rails
⚛️ React / Next.js
🤖 Intégrations IA (OpenAI API)
🔌 Architecture API RESTful

👉 https://noukpoherve.github.io/

#RubyOnRails #JavaScript #FullStack #StageAlterné #Developpement
```

## 🐛 Dépannage

### Le site ne s'affiche pas
- ✅ Vérifiez le nom: `noukpoherve.github.io`
- ✅ GitHub Pages activé dans Settings
- ✅ Attendez 5-10 minutes
- ✅ Effacez le cache (Ctrl+F5)

### Les animations ne fonctionnent pas
- ✅ Vérifiez que `script.js` est bien uploadé
- ✅ Ouvrez la console (F12) pour voir les erreurs
- ✅ Testez sur navigateur récent

### Le formulaire de contact
Le formulaire ouvre votre client email par défaut.
Pour un vrai service d'envoi, utilisez [Formspree](https://formspree.io/):

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

## 📚 Ressources

### Documentation Technique
- [Ruby on Rails Guides](https://guides.rubyonrails.org/)
- [React Documentation](https://react.dev/)
- [GitHub Pages](https://pages.github.com/)

### Inspiration Portfolio
- [devportfoliotemplates.com](https://www.devportfoliotemplates.com/)
- [awwwards.com/websites/portfolio](https://www.awwwards.com/websites/portfolio/)

### Outils Utiles
- [TinyPNG](https://tinypng.com/) - Optimiser images
- [Formspree](https://formspree.io/) - Formulaires
- [Google Analytics](https://analytics.google.com/) - Statistiques

## ✅ Checklist Finale

Avant de partager votre portfolio:

- [ ] Toutes vos informations sont correctes
- [ ] Tous les liens fonctionnent (LinkedIn, projets)
- [ ] Email et téléphone corrects
- [ ] CV uploadé et téléchargeable
- [ ] Pourcentages de compétences réalistes
- [ ] Descriptions de projets claires
- [ ] Pas de fautes d'orthographe
- [ ] Testé sur mobile
- [ ] GitHub repository bien configuré
- [ ] README.md à jour

## 📧 Contact & Support

**Hervé Noukpo**
- 📧 Email: noukpoherve@hotmail.com
- 📱 Téléphone: +33 6 36 38 60 23
- 🔗 LinkedIn: [noukpohervehoundjetode](https://www.linkedin.com/in/noukpohervehoundjetode/)
- 📍 Localisation: Chessy (77700), France

## 🎉 Félicitations !

Votre portfolio professionnel est prêt !

**URL finale:** `https://noukpoherve.github.io/`

Ce portfolio démontre votre expertise technique et votre créativité. Il va certainement attirer l'attention des recruteurs dans le domaine du développement Ruby on Rails et JavaScript.

---

**Tips pour votre recherche:**
1. 📤 Partagez sur LinkedIn avec le hashtag #StageAlterné
2. 🔄 Mettez à jour régulièrement avec vos nouveaux projets
3. 📊 Ajoutez Google Analytics pour suivre les visites
4. 💼 Incluez le lien dans votre signature email
5. 📝 Mentionnez-le dans vos candidatures

**Bon succès dans votre recherche de stage ! 🚀**

---

*Portfolio créé avec* 💎 *Ruby on Rails mindset et* ☕ *beaucoup de café*

**Version:** Personnalisée pour Hervé Noukpo  
**Dernière mise à jour:** Décembre 2024  
**Tech Stack:** HTML5, CSS3 (Variables CSS), Vanilla JavaScript  
**Thème:** Terminal CLI / Matrix Style
