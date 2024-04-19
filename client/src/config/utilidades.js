export function formatearPrecio(precio) {
    // Convertir el precio a string y agregar separadores de miles
    let precioFormateado = precio.toLocaleString();
    
    // Agregar el símbolo de la moneda al inicio
    precioFormateado = `$${precioFormateado}`;
    
    return precioFormateado;
}