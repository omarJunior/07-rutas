import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Link,
  } from "react-router-dom";
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';

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
        </nav>
        <hr/>

        <section className='contenido-principal'>
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/inicio' element={<Inicio />}/>  
                <Route path='/articulos' element={<Articulos />}/>
                <Route path='/contacto' element={<Contacto />}/>

                <Route path='*' element={<Error />}></Route>
            </Routes>
        </section>
        <hr/>
        <footer>
            <p>Este es el footer &copy;omarhernandez@</p>
        </footer>

    </BrowserRouter>
  )
}
