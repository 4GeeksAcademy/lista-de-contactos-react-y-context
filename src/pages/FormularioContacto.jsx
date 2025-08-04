import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import actions from '../actions';

function formatearTelefono(valor) {
    const numeros = valor.replace(/\D/g, '');
    if (numeros.length < 4) return numeros;
    if (numeros.length < 7) return `(${numeros.slice(0,3)}) ${numeros.slice(3)}`;
    return `(${numeros.slice(0,3)}) ${numeros.slice(3,6)}-${numeros.slice(6,10)}`;
}

const FormularioContacto = () => {
    const { id } = useParams();
    const esEdicion = Boolean(id);
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    const [formulario, setFormulario] = useState({ name: '', email: '', phone: '', address: '' });

    useEffect(() => {
        if (esEdicion) {
            const contacto = store.contactos.find(contactoActual => contactoActual.id.toString() === id);
            if (contacto) setFormulario(contacto);
        }
    }, [id, esEdicion, store.contactos]);

    const manejarCambio = evento => {
        if (evento.target.name === 'phone') {
            setFormulario({ ...formulario, phone: formatearTelefono(evento.target.value) });
        } else {
            setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
        }
    };

    const manejarSubmit = (evento) => {
        evento.preventDefault();
         (esEdicion ? actions.editarContacto(dispatch, id, formulario) : actions.agregarContacto(dispatch, formulario));
        navigate('/');
    };

    return (
        <div className="py-5">
            <h1 className="text-center">{esEdicion ? 'Edit contact' : 'Add a new contact'}</h1>
            <form onSubmit={manejarSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control borde-personalizado" name="name" placeholder='Full Name' value={formulario.name} onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control borde-personalizado " name="email" placeholder='Email' value={formulario.email} onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-control borde-personalizado " name="phone" placeholder='Phone' value={formulario.phone} onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control borde-personalizado " name="address" placeholder='Address' value={formulario.address} onChange={manejarCambio} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
            <Link to="/" className="d-block mt-1 enlace-atras">or get back to contacts</Link>
        </div>
    );
};

export default FormularioContacto;