const URL = 'https://cors-anywhere.herokuapp.com/http://www.raydelto.org/agenda.php';

function cargarContactos() {
  fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('listaContactos');
      lista.innerHTML = '';
      data.forEach(contacto => {
        const div = document.createElement('div');
        div.classList.add('contacto');
        div.textContent = `${contacto.nombre} ${contacto.apellido} - ${contacto.telefono}`;
        lista.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error al cargar contactos:', error);
    });
}

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;

  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, apellido, telefono })
  })
    .then(() => {
      document.getElementById('formulario').reset();
      setTimeout(cargarContactos, 1000);
    })
    .catch(error => {
      console.error('Error al agregar contacto:', error);
    });
});

cargarContactos();
