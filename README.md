# Consulting F - Propuesta de Web Corporativa

Este repositorio contiene la propuesta de diseño y desarrollo web para **Consulting F**, una asesoría en Madrid que combina profesionalidad tradicional con herramientas digitales modernas.

## 🎨 Diseño y Estética
La web ha sido diseñada siguiendo un estilo **Glassmorphism** (Vidrio Esmerilado), que aporta modernidad, profundidad y limpieza visual, alineándose con la petición de una imagen tecnológica pero humana.

### Paleta de Colores
- **Primary (Azul Oscuro):** `#062D92` - Confianza, profesionalidad, seriedad.
- **Secondary (Naranja Suave):** `#FBCA98` - Cercanía, calidez, acento humano.
- **Dark (Azul Noche):** `#24324F` - Elegancia, contraste para textos.
- **Light (Crema/Beige):** `#E3DDCE` - Fondo suave, calidez.

## 🚀 Estructura del Proyecto

```
/Consulting-F
│
├── index.html        # Estructura principal de la web
├── styles.css        # Estilos globales, variables y tema Glassmorphism
├── script.js         # Lógica para menú, acordeón FAQ y scroll suave
├── copy.json         # (Referencia) Textos originales proporcionados
├── README.md         # Documentación del proyecto
└── assets/           # Imágenes y recursos gráficos
    ├── hero-image.png    # Imagen generada para el Hero
    └── meeting-image.png # Imagen generada para Metodología
```

## 🛠️ Tecnologías
- **HTML5 Semántico**: Estructura limpia y accesible.
- **CSS3 (Vanilla)**: Sin frameworks pesados. Uso extensivo de:
  - `backdrop-filter: blur()` para efectos de vidrio.
  - Variables CSS (`:root`) para fácil mantenimiento de colores.
  - Flexbox y Grid para maquetación responsiva.
- **JavaScript (Vanilla)**: Interactividad ligera sin dependencias.

## 📦 Cómo visualizar
Simplemente abre el archivo `index.html` en tu navegador web preferido (Chrome, Firefox, Safari, Edge).

## 📝 Notas de Migración a Elementor
El código está estructurado para facilitar su paso a WordPress + Elementor:
1. **Colores:** Configura los colores globales de Elementor con los códigos hexadecimales de arriba.
2. **Tipografía:** Usa 'Outfit' para encabezados y 'Inter' para cuerpo.
3. **Efecto Glass:** En Elementor, puedes lograr el efecto añadiendo este CSS personalizado a las secciones o columnas:
   ```css
   selector {
       background: rgba(255, 255, 255, 0.7);
       backdrop-filter: blur(12px);
       border: 1px solid rgba(255, 255, 255, 0.5);
       border-radius: 16px;
   }
   ```
