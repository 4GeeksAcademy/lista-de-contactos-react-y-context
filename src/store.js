function initialStore() {
    return {
        contactos: []
    };
}

function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'CARGAR_CONTACTOS':
            return { ...store, contactos: action.payload };
        case 'AGREGAR_CONTACTO':
            return { ...store, contactos: [...store.contactos, action.payload] };
        case 'EDITAR_CONTACTO':
            return {
                ...store,
                contactos: store.contactos.map(contacto => contacto.id === action.payload.id ? action.payload : contacto)
            };
        case 'ELIMINAR_CONTACTO':
            return {
                ...store,
                contactos: store.contactos.filter(contacto => contacto.id !== action.payload)
            };
        default:
            return store;
    }
}

export { initialStore };
export default storeReducer;