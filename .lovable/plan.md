## Résoudre le conflit de merge dans `vite.config.ts`

Les deux branches ont ajouté un plugin différent au même endroit :
- `dev` → `prerender(...)` (prerendering statique pour SEO/LLM)
- `main` → `asyncCssPlugin()` (probablement chargement CSS asynchrone)

Les deux sont compatibles et complémentaires — il faut **garder les deux**, pas choisir.

### Résolution

Remplacer le bloc en conflit (marqueurs `<<<<<<<`, `=======`, `>>>>>>>` inclus) par :

```ts
    mode === "production" &&
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterDocumentEvent: "render-event",
          maxConcurrentRoutes: 4,
          headless: true,
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
      }),
    asyncCssPlugin(),
```

### Étapes Git

```bash
# 1. Éditer vite.config.ts manuellement et appliquer le bloc ci-dessus
# 2. Vérifier qu'il n'y a plus de marqueurs
git diff --check
# 3. Vérifier que l'import d'asyncCssPlugin existe bien en haut du fichier
#    (sinon le récupérer depuis main : git show main:vite.config.ts | head)
# 4. Tester le build
npm run build
# 5. Finaliser
git add vite.config.ts
git commit
```

### Points à vérifier après résolution

1. **Imports** en haut du fichier : `prerender` (de `@prerenderer/rollup-plugin`) ET la source d'`asyncCssPlugin` doivent tous les deux être importés. Si `main` n'a pas l'import de `prerender`, l'ajouter ; si `dev` n'a pas l'import d'`asyncCssPlugin`, l'ajouter.
2. **Constante `PRERENDER_ROUTES`** : doit aussi être présente (vient de `dev`).
3. **`package.json` / lockfile** : si `main` n'a pas `@prerenderer/rollup-plugin` + `@prerenderer/renderer-puppeteer` dans les devDependencies, autre conflit probable à résoudre de la même manière (garder les deux côtés).
4. **Ordre des plugins** : `prerender` avant `asyncCssPlugin` est correct — le prerender capture le HTML final, et l'async CSS s'applique au bundle produit.

### Si je dois le faire à ta place

Passe en mode build et je :
1. Édite `vite.config.ts` pour garder les deux plugins,
2. Vérifie/ajoute les imports manquants,
3. Lance `npm run build` pour confirmer que tout passe.

Dis-moi si tu veux aussi que je regarde le diff de `main` pour récupérer la définition exacte d'`asyncCssPlugin` (d'où il vient, sa config).
