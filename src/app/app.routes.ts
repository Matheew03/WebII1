import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos'; 
import { Servicios } from './servicios/servicios';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'productos', component: Productos }, 
    { path: 'servicios', component: Servicios },
    { path: 'contacto', component: Contacto },
    { path: '**', redirectTo: '' }
];
