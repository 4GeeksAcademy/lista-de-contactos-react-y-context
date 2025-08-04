import React from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import actions from '../actions';

const ModalConfirmacion = ({ idAEliminar, onCerrar }) => {
    const { dispatch } = useGlobalReducer();

    const manejarConfirmacionBorrado = () => {
        actions.eliminarContacto(dispatch, idAEliminar);
        onCerrar();
    };

    return (
        <div className="modal show fade d-block bg-dark bg-opacity-50" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">¿Estás seguro?</h5>
                        <button type="button" className="btn-close" onClick={onCerrar}></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onCerrar}>Oh no!</button>
                        <button type="button" className=" btn btn-secondary" onClick={manejarConfirmacionBorrado}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmacion;