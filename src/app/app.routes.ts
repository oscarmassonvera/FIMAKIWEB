import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { QuienesSomos } from './components/quienes-somos/quienes-somos';
import { ProgramasAcademicos } from './components/programas-academicos/programas-academicos';
import { Contacto } from './components/contacto/contacto';
import { Testimonios } from './components/testimonios/testimonios';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'programas-academicos', component: ProgramasAcademicos },
  { path: 'contacto', component: Contacto },
  { path: 'testimonios', component: Testimonios }
];