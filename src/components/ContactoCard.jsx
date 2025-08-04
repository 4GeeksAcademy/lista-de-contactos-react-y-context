import React from 'react';
import { Link } from 'react-router-dom';

const ContactoCard = ({ contacto, onAbrirModal }) => (
    <div className="list-group-item d-flex justify-content-between align-items-center p-3 borde-personalizado ">
        <div className="d-flex align-items-center">
         <img src={`https://i.pravatar.cc/150?u=${contacto.email}`} alt={contacto.name} className="avatar-contacto rounded-circle mx-5"/>

            <div className='mx-3'>
                <h5 className="mb-3 fs-4 fw-normal">{contacto.name}</h5>
                <p className="mb-1 text-secondary fs-5-5 fw-bolder"><i className="fas fa-map-marker-alt me-2"></i>{contacto.address}</p>
                <p className="mb-1 text-secondary fw-bolder ms-2 fs-8"><i className="fas fa-phone me-2"></i>{contacto.phone}</p>
                <p className="mb-0 text-secondary fw-bolder ms-2 fs-8 "><i className="fas fa-envelope me-2"></i>{contacto.email}</p>
            </div>
        </div>
        <div className="me-4 mb-5 px-1">
            <Link to={`/formulario/${contacto.id}`} className="btn btn-link text-dark p-0 me-4 mb-4 ">
                <i className="fas fa-pencil-alt fa-lg"></i>
            </Link>
            <button onClick={() => onAbrirModal(contacto.id)} className="btn btn-link text-dark p-0 ms-4  mb-4 me-1">
                <i className="fas fa-trash-alt fa-lg"></i>
            </button>
        </div>
    </div>
);

export default ContactoCard;