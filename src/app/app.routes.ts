import { Routes } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NotasComponent } from './notas/notas.component';
export const routes: Routes = [
    
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'estacionamiento', component: EstacionamientoComponent },
    { path: 'notas', component: NotasComponent },
    { path: 'almacen', component: AlmacenComponent }

];
