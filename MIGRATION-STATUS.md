# Migración Angular 15 → 18 — Estado actual — ontimize-web-ngx-playground

> Última actualización: 10 abril 2026

## Repositorio y rama

**Ruta local**: `C:\work\ontimize-web-ngx\18.x.x\ontimize-web-ngx-playground`  
**Rama activa**: `migration/18.x.x`

---

## ESTADO GLOBAL

| Tarea | Estado |
|-------|--------|
| Actualizar dependencias Angular 18 | ✅ Completado |
| Eliminar @angular/flex-layout / @ngbracket/ngx-layout | ✅ Completado |
| Migrar templates fxLayout → clases CSS | ✅ Completado |
| SCSS M2 theming (prefijos `m2-`) | ✅ Completado |
| Instalar addons Angular 18 (extra-components + gallery) | ✅ Completado |
| Build playground: 0 errores | ✅ Completado |
| Control flow migration (`*ngIf`→`@if`, `*ngFor`→`@for`) | ✅ Completado |

---

## DEPENDENCIAS CLAVE

```json
"ontimize-web-ngx": "file:../ontimize-web-ngx/dist/ontimize-web-ngx-18.0.0-SNAPSHOT-0.tgz",
"ontimize-web-ngx-extra-components": "file:../ontimize-web-ngx-extra-components/dist/ontimize-web-ngx-extra-components-18.0.0-SNAPSHOT-0.tgz",
"ontimize-web-ngx-gallery": "file:../ontimize-web-ngx-gallery/dist/ontimize-web-ngx-gallery-18.0.0-SNAPSHOT-0.tgz"
```

Los tres paquetes se instalan desde tgz locales. Para actualizar tras un cambio en el framework o addons:

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

## CAMBIOS REALIZADOS

### Migración Angular 15 → 18

- `package.json`: todas las dependencias Angular a `^18.2.0`
- Eliminado `@angular/flex-layout` y `@ngbracket/ngx-layout` (y su `overrides`)
- Añadido `luxon ^3.x` + `@types/luxon`
- SCSS: prefijos `m2-` en 4 ficheros de theming
- **103 templates HTML** migrados: `fxLayout/fxFlex/fxLayoutAlign/fxLayoutGap` → clases CSS `o-flex-*`
- `MediaObserver` → `BreakpointObserver` en `screen-configuration.component.ts`
- `UntypedFormControl` → `AbstractControl` en `validators.component.ts`
- `CommonModule` añadido a `SharedModule`
- `@` escapados con `&#64;` en templates (control flow Angular 17+)

### Control flow migration (10 abril 2026)

- **21 templates HTML** migrados: `*ngIf` → `@if`, `*ngFor` → `@for` via `ng generate @angular/core:control-flow`
- Afectados: home, main, shared, data (grid, lists, table, tree), layout containers, modals, inputs events

### Addons instalados (10 abril 2026)

- `ontimize-web-ngx-extra-components@18.0.0-SNAPSHOT-0` — tgz local
- `ontimize-web-ngx-gallery@18.0.0-SNAPSHOT-0` — tgz local
- Eliminado `@ngbracket/ngx-layout` y `overrides` (ya no necesarios con addons v18)
