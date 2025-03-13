let participantes = []; // Lista de participantes

function agregarParticipante() {
    let input = document.getElementById("nombreParticipante");
    let nombre = input.value.trim(); // Quita espacios en blanco

    if (nombre === "") { 
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Evita nombres duplicados (ignorando mayúsculas/minúsculas)
    if (participantes.some(p => p.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    participantes.push(nombre); // Agregar participante al array
    input.value = ""; // Limpiar input
    mostrarParticipantes(); // Actualizar la lista en la pantalla
}

function mostrarParticipantes() {
    let lista = document.getElementById("listaParticipantes");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    participantes.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}