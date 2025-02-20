const animales = [
    { nombre: "León", imagen: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfbGlvbl9pc29sYXRlZF9vbl9jb2xvcl9iYWNrZ3JvdW5kXzJhNzgwMjM1LWRlYTgtNDMyOS04OWVjLTY3ZWMwNjcxZDhiMV8xLmpwZw.jpg", descripcion: "El león es un felino carnívoro y uno de los grandes depredadores de África." },
    { nombre: "Elefante", imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSGXlecw5dxe-lymG_A-U9StT24OS6tjXdVkp4oIyBdKYi5y0EmI-WVLD2lag_CA_Ks7T_O3dk48AWsUhPrudNsQ", descripcion: "El elefante es el mamífero terrestre más grande, famoso por su trompa." },
    { nombre: "Jirafa", imagen: "https://cdn0.expertoanimal.com/es/posts/3/7/5/tipos_de_jirafas_24573_600_square.jpg", descripcion: "La jirafa es el animal terrestre más alto, con un cuello largo para alcanzar hojas." },
    { nombre: "Tigre", imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaQlakQ9lKME9qYfeQ_XC4pc7faX3NqwDBKWFcX8iBfMQQ93nJbwCueAThLYdxNtDuxk7kj4Ku29aQtbuXEfGorg", descripcion: "El tigre es un felino de gran tamaño con un pelaje anaranjado con rayas negras." },
    { nombre: "Oso Panda", imagen: "https://static.nationalgeographic.es/files/styles/image_3200/public/naturepl_01679242.webp?w=1600&h=900", descripcion: "El oso panda es un animal herbívoro que se alimenta principalmente de bambú." },
    { nombre: "Cebra", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Equus_grevyi_1.jpg/640px-Equus_grevyi_1.jpg", descripcion: "La cebra es un equino con un patrón de rayas blancas y negras único." },
    { nombre: "Cocodrilo", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/SaltwaterCrocodile%28%27Maximo%27%29.jpg/640px-SaltwaterCrocodile%28%27Maximo%27%29.jpg", descripcion: "El cocodrilo es un reptil semiacuático con una poderosa mordida." },
    { nombre: "Lobo", imagen: "https://content.nationalgeographic.com.es/medio/2024/12/04/lobo-eurasiatico-canis-lupus-lupus_9a917f92_241204160722_800x800.webp", descripcion: "El lobo es un mamífero carnívoro y ancestro directo del perro doméstico." },
    { nombre: "Águila", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg/640px-Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg", descripcion: "El águila es una majestuosa ave rapaz con una vista excepcional." },
    { nombre: "Pingüino", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/be/Pygoscelis_papua.jpg", descripcion: "El pingüino es un ave marina no voladora que habita en regiones frías." }
];

const catalogo = document.getElementById("catalogo");

// Crear las tarjetas de los animales dinámicamente
animales.forEach(animal => {
    const card = document.createElement("div");
    card.classList.add("animal-card");

    const nombre = document.createElement("h2");
    nombre.textContent = animal.nombre;

    const imagen = document.createElement("img");
    imagen.src = animal.imagen;
    imagen.alt = `Imagen de ${animal.nombre}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = animal.descripcion;

    const boton = document.createElement("button");
    boton.textContent = "Ver foto";
    boton.addEventListener("click", () => {
        if (imagen.style.display === "block") {
            imagen.style.display = "none";
            descripcion.style.display = "none";
            boton.textContent = "Ver foto";
        } else {
            imagen.style.display = "block";
            descripcion.style.display = "block";
            boton.textContent = "Ocultar";
        }
    });

    card.appendChild(nombre);
    card.appendChild(imagen);
    card.appendChild(descripcion);
    card.appendChild(boton);

    catalogo.appendChild(card);
});