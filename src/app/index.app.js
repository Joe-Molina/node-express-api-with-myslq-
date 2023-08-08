import axios from 'axios'

const url = 'http://localhost:3000/indexApp';
// Agrega un evento al formulario para manejar el envío de la solicitud
document.getElementById('myForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores de los campos del formulario
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  // Crea un objeto con los datos que deseas enviar al servidor
  const data = {
    username: username,
    password: password
  };

  axios.post(url, data)
    .then(response => {
      console.log('Respuesta del servidor:', response.data);
      // Realiza acciones adicionales después de recibir la respuesta del servidor
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      // Maneja el error de la solicitud
    });
});