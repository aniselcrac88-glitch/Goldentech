// Guardar y mostrar productos en carrito usando localStorage

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Añadir producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

// Mostrar carrito
if (document.getElementById("carrito-contenido")) {
  const div = document.getElementById("carrito-contenido");
  if (carrito.length === 0) {
    div.innerHTML = "<p>Tu carrito está vacío</p>";
  } else {
    div.innerHTML = carrito
      .map(p => `<p>${p.nombre} - ${p.precio}</p>`)
      .join("");
  }
}

// Vaciar carrito
if (document.getElementById("vaciarCarrito")) {
  document.getElementById("vaciarCarrito").onclick = () => {
    localStorage.removeItem("carrito");
    location.reload();
  };
}

// Registro de usuarios
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("emailRegister").value;
    const pass = document.getElementById("passwordRegister").value;
    localStorage.setItem("usuario", JSON.stringify({ email, pass }));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location = "login.html";
  });
}

// Inicio de sesión
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const pass = document.getElementById("passwordLogin").value;
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.email === email && usuario.pass === pass) {
      alert("Inicio de sesión exitoso");
      window.location = "index.html";
    } else {
      alert("Correo o contraseña incorrectos");
    }
  });
}
// --- GALERÍA DE PRODUCTOS ---
let indice = 0;

// Sustituye estas URLs por tus propias imágenes
const imagenes = [
  "https://images.unsplash.com/photo-1518444026475-6d1c9c3f3c58?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
];

function cambiarImagen(direccion) {
  indice += direccion;
  if (indice < 0) indice = imagenes.length - 1;
  if (indice >= imagenes.length) indice = 0;
  document.getElementById("imagenProducto").src = imagenes[indice];
}
function agregarAlCarrito(nombre, precio) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${nombre} agregado al carrito`);
}

function comprarAhora(nombre, precio) {
  alert(`Has comprado ${nombre} por ${precio}. ¡Gracias por tu compra en GoldenTech!`);
}
