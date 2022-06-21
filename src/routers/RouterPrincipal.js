import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate,
  } from "react-router-dom";
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';
import { Acerca } from '../components/Panel/Acerca';
import { Crear } from '../components/Panel/Crear';
import { Gestion } from '../components/Panel/Gestion';
import { InicioPanel } from '../components/Panel/InicioPanel';
import { PanelControl } from '../components/PanelControl';
import { Persona } from '../components/Persona';


export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <h1>Cabecera</h1>
        <hr/>
        <nav>
           <li>
             <NavLink to="/inicio" className={(e)=> (e.isActive) ? 'activado' : '' }>Inicio</NavLink>
           </li>
           <li>
             <NavLink to="/articulos" className={(e)=> (e.isActive) ? 'activado' : '' }>Articulos</NavLink>
           </li>
           <li>
             <NavLink to="/contacto" className={(e)=> (e.isActive) ? 'activado' : '' }>Contacto</NavLink>
           </li>

           <li>
             <NavLink to="/panel/" className={(e)=> (e.isActive) ? 'activado' : '' }>Panel de control</NavLink>
           </li>
        </nav>
        <hr/>

        <section className='contenido-principal'>
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/inicio' element={<Inicio />}/>  
                <Route path='/articulos' element={<Articulos />}/>
                <Route path='/contacto' element={<Contacto />}/>
                <Route path='/persona/:nombre/:apellido' element={<Persona />}/>
                <Route path='/persona/:nombre' element={<Persona />}/>
                <Route path='/persona' element={<Persona />}/>
                <Route path='/redirigir' element={<Navigate to="/persona/victor/robles"/>} />

                <Route path='/panel/*' element={<PanelControl />}> 
                  <Route index element={< InicioPanel />}/>
                  <Route path='inicio' element={< InicioPanel />}/>
                  <Route path='crear-articulo' element={<Crear/>}/>
                  <Route path='gestion-usuario' element={< Gestion />}/>
                  <Route path='acerca-de' element={< Acerca />}/>
                </Route>

                <Route path='*' element={<Error />}></Route>
            </Routes>
        </section>
        <hr/>
        <footer>
            <p>Este es el footer &copy;ohernandez@ufotech.co</p>
        </footer>

    </BrowserRouter>
  )
}
