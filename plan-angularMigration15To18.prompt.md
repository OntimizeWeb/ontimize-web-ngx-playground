# Plan: Migración Angular 15 → 18 — ontimize-web-ngx-playground

## TL;DR
Migración de la aplicación demo playground de Angular 15.2.10 a Angular 18. Es una app consumidora de `ontimize-web-ngx`, por lo que la migración depende de la versión 18 del framework. La app sirve como validación funcional y visual de TODOS los componentes del framework. Se propone una estrategia de rama única `migration/18.x.x` desde `15.x.x`, ya que las migraciones intermedias (16, 17) no aportan valor en una app demo — el framework ya está migrado incrementalmente.

## Datos clave del codebase (reales)
- **51 NgModules** (app + feature modules + routing modules)
- **147 templates HTML**, **57 archivos SCSS**
- **1 spec file** (casi sin tests — la validación es funcional/visual)
- **635 líneas con directivas flex-layout** (fxLayout, fxFlex, fxLayoutAlign, fxLayoutGap)
- **30 usages de `*ngIf`**, **17 de `*ngFor`**
- **2 archivos SCSS con `@import '@angular/material/theming'`** (legacy M2)
- **Sin `HttpClientModule` explícito** (gestionado por OntimizeWebModule)
- Angular 15.2.10, TypeScript 4.9.5, zone.js 0.12.0
- Dependencias Ontimize: `ontimize-web-ngx ^15.9.0`, `ontimize-web-ngx-extra-components ^15.0.0`, `ontimize-web-ngx-gallery 15.1.2`
- Otras: `ngx-highlightjs ^8.0.0`, `highlight.js ^11.7.0`, `moment ^2.18.1`
- Usa `protractor` y `tslint` (ambos deprecated)
- Builder: `@angular-devkit/build-angular:browser` (legacy)
- Bootstrap: `platformBrowserDynamic().bootstrapModule(AppModule)` + `ontimizePostBootstrap`

## Estrategia de Ramas

```
15.x.x (actual, intocable)
  └── migration/18.x.x (migración directa 15 → 18)
       └── (merge a 18.x.x cuando esté listo)
```

**Justificación rama única**: Al ser una app consumidora (no librería), las versiones intermedias 16/17 no se publican. El framework `ontimize-web-ngx@18.x` ya está compilado y publicable. Saltar directamente a 18 reduce esfuerzo y las ramas intermedias no aportan hitos testeables.

---

## PASO 1: Actualizar dependencias core a Angular 18 ✅ COMPLETADO

### 1.1 Dependencias Angular
```
@angular/core, @angular/cli, @angular/compiler-cli, etc. → ^18.2.0
@angular/cdk, @angular/material, @angular/material-moment-adapter → ^18.2.0
@angular/service-worker → ^18.2.0
@angular/platform-server, @angular/upgrade → ^18.2.0
```

### 1.2 TypeScript y herramientas
```
typescript: ~4.9.5 → ~5.5.0
zone.js: ~0.12.0 → ~0.14.10
```

### 1.3 Reemplazar `@angular/flex-layout` → `@ngbracket/ngx-layout`
- `@angular/flex-layout ^15.0.0-beta.42` → `@ngbracket/ngx-layout ^18.0.0`
- **Files**: `package.json`
- **No hay imports de FlexLayoutModule en app code** — el framework re-exporta vía OntimizeWebModule
- El framework `ontimize-web-ngx@18` ya tiene el peer dependency de `@ngbracket/ngx-layout ^18.0.0`

### 1.4 Actualizar ontimize-web-ngx ✅
```
ontimize-web-ngx: file:../ontimize-web-ngx/dist/ontimize-web-ngx-18.0.0-SNAPSHOT-0.tgz
ontimize-web-ngx-extra-components: file:../ontimize-web-ngx-extra-components/dist/ontimize-web-ngx-extra-components-18.0.0-SNAPSHOT-0.tgz ✅
ontimize-web-ngx-gallery: file:../ontimize-web-ngx-gallery/dist/ontimize-web-ngx-gallery-18.0.0-SNAPSHOT-0.tgz ✅
```

Los tres paquetes se instalan desde tgz locales. Ambos addons han sido migrados a Angular 18 (10 abril 2026).

### 1.5 Actualizar third-party
```
ngx-highlightjs: ^8.0.0 → ^12.0.0 (peers: @angular/core >=17)
highlight.js: ^11.7.0 → mantener (compatible)
moment: ^2.18.1 → mantener (compatible)
```

### 1.6 Eliminar dependencias deprecated
- **Eliminar** `protractor ~7.0.0` (deprecated desde Angular 12, reemplazado por Cypress/Playwright)
- **Eliminar** `tslint ~6.1.0` (deprecated, reemplazado por ESLint)
- **Eliminar** `@types/jasminewd2 ~2.0.3` (dependencia de Protractor)
- **Añadir** `@angular-eslint/*` si se quiere linting

### 1.7 Actualizar devDependencies
```
@angular-devkit/build-angular → ^18.2.0
@angular/compiler-cli → ^18.2.0
@angular/language-service → ^18.2.0
@types/jasmine → ~5.1.0
@types/node → ^20.0.0
jasmine-core → ~5.1.0
karma-jasmine → ~5.1.0
karma-jasmine-html-reporter → ~2.1.0
ts-node → ~10.9.0
```

### 1.8 Verificación
- `npm install --legacy-peer-deps`
- `npx ng build` compila sin errores
- `npx ng serve` — la app carga

---

## PASO 2: Actualizar configuración del proyecto ✅ COMPLETADO

### 2.1 tsconfig.json
```diff
- "module": "es2020",
+ "module": "es2022",
- "lib": ["es2018", "dom"],
+ "lib": ["es2022", "dom"],
```

### 2.2 angular.json — Migrar builder (opcional pero recomendado)
Angular 18 soporta el nuevo builder `@angular-devkit/build-angular:application` que reemplaza a `browser`:
```diff
- "builder": "@angular-devkit/build-angular:browser",
+ "builder": "@angular-devkit/build-angular:application",
```
- Requiere cambiar `main` → `browser`, eliminar `polyfills` file en favor de array inline
- **Alternativa**: Mantener `browser` builder que sigue soportado en Angular 18

### 2.3 polyfills.ts
En Angular 18 con builder `application`, los polyfills se configuran en `angular.json`:
```json
"polyfills": ["zone.js"]
```
- Eliminar `src/polyfills.ts` si se migra al nuevo builder
- O mantener la referencia actual si se usa el builder legacy

### 2.4 Eliminar ficheros obsoletos
- `tslint.json` → ya no se usa (reemplazado por ESLint o eliminado)
- `.browserslistrc` → Angular 18 usa `.browserslistrc` incluido en el proyecto o defaults del CLI
- `e2e/` → si se elimina Protractor, eliminar el directorio

---

## PASO 3: Control flow migration (`*ngIf` → `@if`, `*ngFor` → `@for`) ⏳ PENDIENTE

### 3.1 Migración automática
```bash
npx ng generate @angular/core:control-flow
```
- **Alcance**: 147 templates, ~30 `*ngIf`, ~17 `*ngFor`
- Volumen bajo — la mayoría de templates son declarativos con componentes Ontimize
- Revisar diff después del schematic

### 3.2 No aplica en la playground
- **Migración `inject()`**: la app no tiene servicios/componentes con `Injector.get()` propios — todo el DI va a través del framework
- **Guards funcionales**: sin guards propios en la app demo

### 3.3 Verificación
- Build sin errores
- Revisión visual de las páginas con `*ngIf`/`*ngFor`

---

## PASO 4: Migración flex-layout → CSS nativo ✅ COMPLETADO

### 4.1 Alcance
- **635 líneas** con directivas `fxLayout`, `fxFlex`, `fxLayoutAlign`, `fxLayoutGap`
- Distribuidas en **147 HTML files**
- Es el cambio de mayor volumen en la app

### 4.2 Mapping de reemplazos
| Directiva flex-layout | Equivalente CSS |
|---|---|
| `fxLayout="row"` | `style="display:flex; flex-direction:row"` o class `.d-flex.flex-row` |
| `fxLayout="column"` | `style="display:flex; flex-direction:column"` o class `.d-flex.flex-column` |
| `fxLayoutAlign="start center"` | `justify-content:flex-start; align-items:center` |
| `fxLayoutAlign="space-between center"` | `justify-content:space-between; align-items:center` |
| `fxLayoutGap="8px"` | `gap: 8px` |
| `fxFlex` | `flex: 1 1 0%` |
| `fxFlex="50%"` | `flex: 0 0 50%` |
| `fxFlexFill` | `width:100%; height:100%` |
| `fxLayout.lt-md="column"` (responsive) | `@media (max-width: 959px) { flex-direction: column }` |

### 4.3 Estrategia
1. Crear utility classes en un `_flex-utils.scss` global
2. Reemplazar en lotes por feature module (home, buttons, inputs, data, layout, media, modals)
3. Verificar visualmente cada sección después del reemplazo
4. Eliminar `@ngbracket/ngx-layout` de `package.json` cuando no queden usages

### 4.4 Verificación
- Build sin errores
- **Verificación VISUAL exhaustiva** de todas las páginas (la mayoría del layout cambia)

---

## PASO 5: Actualizar SCSS theming (M2 legacy → M2 modern syntax) ✅ COMPLETADO

### 5.1 Archivos afectados
| Archivo | Problema |
|---|---|
| `src/styles.scss` | `@import "node_modules/@angular/material/theming"` (legacy @import) |
| `src/app/main/about/about.theme.scss` | `@import 'node_modules/@angular/material/theming'` |
| `src/app/main/main-theme.scss` | Usa `@use '@angular/material' as mat` ✅ (ya moderno) |
| `src/assets/css/app.scss` | Usa `@use 'ontimize-web-ngx/theming/...'` ✅ (OK, depende del framework) |

### 5.2 Acciones
- **`styles.scss`**: Reemplazar `@import "node_modules/@angular/material/theming"` → `@use '@angular/material' as mat`
- **`about.theme.scss`**: Mismo reemplazo + adaptar mixins si usan API legacy
- Los archivos que ya usan `@use '@angular/material' as mat` están OK
- Los archivos que usan `ontimize-style.scss` dependen del framework — cuando el framework migre M3, estos se actualizan

### 5.3 Nota sobre M3 ⏳ PENDIENTE (bloqueado por framework)
- Angular Material 18 soporta M3 pero **no es obligatorio**
- Los temas siguen funcionando con M2 en Angular 18
- La migración a M3 se hará cuando el framework `ontimize-web-ngx` migre su theming (subtarea 3.2 del plan del framework)
- **En las apps demo**: Actualizar cuando el framework publique su nuevo theming API
- **Alcance**: `src/styles.scss`, `src/app/main/about/about.theme.scss`, `src/app/main/main-theme.scss`, `src/assets/css/app.scss`

---

## PASO 6: Standalone migration (cuando el framework lo soporte) ⏳ PENDIENTE

### 6.1 Estado actual
- 51 NgModules en la app
- `OntimizeWebModule.forRoot(CONFIG)` es el punto central de configuración
- Todos los feature modules importan `OntimizeWebModule` y `SharedModule`

### 6.2 Dependencia del framework
- Cuando `ontimize-web-ngx@18` exporte `provideOntimizeWeb()` como alternativa standalone al `OntimizeWebModule.forRoot()`, las apps podrán migrar
- **Esta migración no se puede hacer hasta que el framework publique la API standalone**

### 6.3 Pasos cuando esté disponible
1. Migrar `main.ts` a `bootstrapApplication()` con `provideOntimizeWeb(CONFIG)`
2. Convertir feature modules a standalone components con lazy loading vía `loadComponent`
3. Eliminar `AppModule` y feature modules
4. Eliminar `polyfills.ts` (usar configuración en `angular.json`)

---

## PASO 7: Verificación final como proyecto de validación del framework ⏳ PENDIENTE

### 7.1 Componentes a verificar visualmente
Esta app es el **banco de pruebas principal** del framework. Verificar CADA sección:

| Sección | Componentes Ontimize probados |
|---|---|
| **Home** | o-card-menu-item, layouts generales |
| **Buttons** | o-button (BASIC, RAISED, STROKED, FLAT, FAB, MINI-FAB, ICON), o-button-toggle |
| **Inputs** | TODOS los inputs: text, email, password, textarea, integer, real, percent, currency, date, time, hour, nif, phone, combo, list-picker, checkbox, slide-toggle, radio, file, time-input, html, icon, image-radio, dual-list-selector |
| **Data** | o-table (basic, fixed, pagination, horizontal-scroll, exportable, insertable, group, virtual-scroll, calculated-columns, report), o-list, o-grid, o-tree |
| **Layout** | o-form, o-form-layout-manager, containers (row, column, row-collapsible, column-collapsible), o-expandable-container |
| **Media** | o-image |
| **Modals** | o-dialog, contextmenu |
| **About** | about page |

### 7.2 Temas a verificar
- Tema light (ontimize default)
- Tema dark (`.o-dark`)
- Consistencia visual tras migración SCSS

### 7.3 Checklist de regresión
- [ ] Build production sin errores
- [ ] Navegación entre todas las rutas
- [ ] Lazy loading funciona
- [ ] Todos los inputs renderizan correctamente
- [ ] Tables con datos (paginación, scroll, filtros)
- [ ] Forms con CRUD
- [ ] Dark theme toggle funciona
- [ ] Layout responsive (fxLayout responsive → CSS media queries)
- [ ] Gallery component (si ontimize-web-ngx-gallery@18 disponible)
- [ ] Code highlighting funciona (ngx-highlightjs)

---

## PASO 8: Typed Forms ⏳ PENDIENTE (bajo prioridad)

### 8.1 Alcance
- La app tiene usos puntuales de `UntypedFormControl` (ej. `validators.component.ts`)
- Migrando `UntypedFormControl` → `AbstractControl` o tipado específico según contexto

### 8.2 No aplica masivamente
- La mayoría del manejo de formularios está en los componentes de `ontimize-web-ngx`
- Esta app no tiene formularios custom con `UntypedFormGroup` complejos

### 8.3 Acciones
- Revisar y migrar los usages de `UntypedFormControl` en código propio de la app
- **Nota**: `validators.component.ts` ya migrado a `AbstractControl` en la migración 15→18

---

## FASE TRANSVERSAL: Dependencia del framework

### Orden de pasos bloqueados por el framework

La playground es una **app consumidora** del framework — varios pasos están bloqueados hasta que `ontimize-web-ngx@18` implemente las correspondientes APIs:

| Paso playground | Bloqueado por framework | Tarea framework |
|---|---|---|
| PASO 5.3 (M3 theming) | `ontimize-web-ngx` migre theming a M3 | Subtarea 3.2 del plan del framework |
| PASO 6 (Standalone) | `ontimize-web-ngx` exporte `provideOntimizeWeb()` | Subtarea 3.3 del plan del framework |

### Workflow de actualización tgz

Cuando el framework o addons publiquen nuevas versiones locales:

```bash
export PATH="$HOME/AppData/Local/nvs/node/20.18.3/x64:$PATH"

# 1. Rebuild framework
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx
npm run build && cd dist && npm pack

# 2. Rebuild extra-components (si hay cambios)
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-extra-components
npm run build && npm pack dist/ && mv *.tgz dist/

# 3. Rebuild gallery (si hay cambios)
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-gallery
npm run build && npm pack dist/ && mv *.tgz dist/

# 4. Reinstalar en playground
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-playground
npm install --legacy-peer-deps
```

---

## Resumen de cambios para la guía de migración de apps

### Cambios OBLIGATORIOS para cualquier app ontimize-web-ngx 15 → 18:

1. **package.json**: Actualizar todos los `@angular/*` a `^18.2.0`, `typescript` a `~5.5.0`, `zone.js` a `~0.14.10`
2. **package.json**: `@angular/flex-layout` → `@ngbracket/ngx-layout ^18.0.0` (o eliminar si se migra a CSS)
3. **package.json**: `ontimize-web-ngx` → `^18.0.0`
4. **package.json**: Actualizar companion packages (charts, map, filemanager, report, gallery) a su versión 18
5. **tsconfig.json**: `"module": "es2022"`, `"lib": ["es2022", "dom"]`
6. **SCSS**: Reemplazar `@import '@angular/material/theming'` → `@use '@angular/material' as mat`
7. **Node.js**: Mínimo v18.19.1 o v20.11.1

### Cambios RECOMENDADOS:
8. Ejecutar `ng generate @angular/core:control-flow` para migrar `*ngIf`/`*ngFor` → `@if`/`@for`
9. Eliminar `tslint.json`, `protractor`, `e2e/` si se usan
10. Migrar flex-layout → CSS nativo (eliminar dependencia de `@ngbracket/ngx-layout`)
11. Actualizar `angular.json` builder a `application` (opcional)

### Cambios FUTUROS (cuando el framework lo soporte):
12. Migrar a standalone bootstrap con `provideOntimizeWeb()`
13. Migrar theming a M3 cuando el framework publique nueva API
14. Migrar `HttpClientModule` a `provideHttpClient()` (si se importa explícitamente)
