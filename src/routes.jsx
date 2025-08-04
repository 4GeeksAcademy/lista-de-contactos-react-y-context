import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FormularioContacto from "./pages/FormularioContacto";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>No encontrado!</h1>} >
            <Route index element={<Home />} />
            <Route path="formulario" element={<FormularioContacto />} />
            <Route path="formulario/:id" element={<FormularioContacto />} />
        </Route>
    )
);

export default router;