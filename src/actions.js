
const URL_BASE = 'https://playground.4geeks.com/contact/agendas/agendaEybagit';

function procesarRespuesta(respuesta) {
  if (!respuesta.ok) return null;
  return respuesta.status === 204 ? null : respuesta.json();
}

function cargarContactos(dispatch) {
  fetch(`${URL_BASE}/contacts`)
    .then(respuesta => {
      if (respuesta.status === 404) {
        return fetch(URL_BASE, { method: 'POST' }).then(() => fetch(`${URL_BASE}/contacts`));
      }
      return respuesta;
    })
    .then(procesarRespuesta)
    .then(datos => {
      const lista = datos ? datos.contacts : [];
      dispatch({ type: 'CARGAR_CONTACTOS', payload: lista });
    })
    .catch(error => console.error('Error en cargarContactos:', error));
}

function agregarContacto(dispatch, contacto) {
  fetch(`${URL_BASE}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contacto)
  })
    .then(procesarRespuesta)
    .then(nuevoContacto => {
      if (nuevoContacto) {
        dispatch({ type: 'AGREGAR_CONTACTO', payload: nuevoContacto });
      }
    })
    .catch(error => console.error('Error en agregarContacto:', error));
}

function editarContacto(dispatch, id, contacto) {
  fetch(`${URL_BASE}/contacts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contacto)
  })
    .then(procesarRespuesta)
    .then(contactoActualizado => {
      if (contactoActualizado) {
        dispatch({ type: 'EDITAR_CONTACTO', payload: contactoActualizado });
      }
    })
    .catch(error => console.error('Error en editarContacto:', error));
}

function eliminarContacto(dispatch, id) {
  fetch(`${URL_BASE}/contacts/${id}`, { method: 'DELETE' })
    .then(procesarRespuesta)
    .then(() => {
      dispatch({ type: 'ELIMINAR_CONTACTO', payload: id });
    })
    .catch(error => console.error('Error en eliminarContacto:', error));
}

export default {
  cargarContactos,
  agregarContacto,
  editarContacto,
  eliminarContacto
};

