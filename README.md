# Proyecto Campus — Interfaz web estática

Sitio estático de demostración para el "Campus Tlamatiliztli". Contiene una pantalla de bienvenida,
un botón principal para abrir el formulario de registro y un formulario que guarda datos en
`localStorage`.

Estructura principal:

- `index.html` — página principal.
- `estilo.css` — estilos (extraídos del HTML).
- `codigo.js` — comportamiento JavaScript (extraído del HTML).
- `assets/` — imágenes y recursos.

Registro y datos:

- Los registros se almacenan en `localStorage` bajo la clave `campusTlamatiliztliRegistrations`.

Cómo probar localmente

1) Abrir directamente en el navegador (doble clic en `index.html`).

2) O servir con un servidor HTTP simple (recomendado para que las rutas de `assets/`
   funcionen correctamente). Desde PowerShell o una terminal en la carpeta `Proyecto`:

```powershell
# Si tienes Python 3 instalado
python -m http.server 8000

# Luego abrir http://localhost:8000/Proyecto/index.html
```

Edición rápida

- Modifica la estructura y el texto en `index.html`.
- Cambia estilos en `estilo.css`.
- Cambia la lógica en `codigo.js`.

¿Quieres que haga un commit con estos cambios o que pruebe la página en un servidor local ahora?
