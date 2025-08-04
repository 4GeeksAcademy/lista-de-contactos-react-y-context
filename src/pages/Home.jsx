import React, { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import actions from '../actions';
import ContactoCard from '../components/ContactoCard';
import ModalConfirmacion from '../components/ModalConfirmacion';

const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    const [idParaBorrar, setIdParaBorrar] = useState(null);

    useEffect(() => {
        actions.cargarContactos(dispatch);
    }, []);

    return (
        <div className="pb-5 ">
            <div className="list-group">
                {store.contactos.length > 0 ? (
                    store.contactos.map(contacto => (
                        <ContactoCard key={contacto.id} contacto={contacto} onAbrirModal={setIdParaBorrar} />
                    ))
                ) : (
                    <p className="text-center">No hay contactos, ¡agrega uno!</p>
                )}
            </div>
                {idParaBorrar ? (
                <ModalConfirmacion
                    idAEliminar={idParaBorrar}
                    onCerrar={() => setIdParaBorrar(null)}
                />
                ) : null}
           </div>
    );
};

export default Home;