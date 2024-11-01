let CuentaBancaria = 60000;

document.getElementById("formularioDeExtraccion").addEventListener("submit", function(event) {
    event.preventDefault();

    // Cambié 'Value' a 'value' y añadí parseFloat para convertir a número.
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let mensaje = document.getElementById("mensaje");
    let muestraDeSaldo = document.getElementById("dinero");

    if (cantidad > CuentaBancaria) {
        mensaje.textContent = "disculpe esta pidiendo demas del limite.";
        mensaje.style.color = "red";
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        mensaje.textContent = "Por favor, ingrese una cantidad válida.";
        mensaje.style.color = "red";
    } else {
        // Cambié para restar la cantidad en lugar de asignarla.
        CuentaBancaria -= cantidad;
        muestraDeSaldo.textContent = CuentaBancaria;
        mensaje.textContent = "Has extraído: $" + cantidad;
        mensaje.style.color = "green";
    }
});