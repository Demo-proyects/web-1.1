const fs = require('fs');
// ⚠️ CORRECCIÓN: Usar 'minify' con desestructuración.
const { minify } = require('html-minifier'); 

// 1. Opciones para Minificación Máxima
const options = {
    // Elimina todos los comentarios
    removeComments: true,
    // Elimina espacios en blanco
    collapseWhitespace: true,
    // Elimina atributos por defecto que no son necesarios
    removeRedundantAttributes: true,
    // Elimina atributos booleanos (ej: checked="checked" -> checked)
    collapseBooleanAttributes: true,
    // Minimiza CSS y JS embebido
    minifyCSS: true,
    minifyJS: true,
    // Nueva opción para máxima compresión de atributos
    removeAttributeQuotes: true
};

// 2. Lee el HTML limpio
const htmlInput = fs.readFileSync('index.html', 'utf8');

// 3. Minimiza
// ⚠️ CORRECCIÓN: Usar 'minify' en lugar de 'Minifier'.
const htmlOutput = minify(htmlInput, options); 

// 4. Guarda la versión minimizada
fs.writeFileSync('index.min.html', htmlOutput);

console.log('✅ HTML minimizado con éxito en index.min.html');