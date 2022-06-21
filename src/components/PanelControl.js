import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink className={(e)=> (e.isActive) ? 'activado' : '' } to="/panel/inicio">Inicio</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> (e.isActive) ? 'activado' : '' } to="/panel/crear-articulo">Crear articulos</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> (e.isActive) ? 'activado' : '' } to="/panel/gestion-usuario">Gestion usuarios</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> (e.isActive) ? 'activado' : '' } to="/panel/acerca-de"> Acerca de</NavLink>
                </li>
            </ul>
        </nav>

        <div>
            {
                /* quiero cargar aqui los componentes de las subrutas o rutas anidadas */
                <Outlet />
            }
        </div>

    </div>
  )
}
