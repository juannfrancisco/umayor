import { CalendarioComponent } from './components/calendario/calendario.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CampusComponent } from './components/campus/campus.component';
import { CampusVirtualComponent } from './components/campus-virtual/campus-virtual.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { AdmisionComponent } from './components/admision/admision.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path:'', component: LandingComponent },
  { path:'landing', component: LandingComponent, children:[
    { path:'home', component: HomeComponent },
    { path:'admision', component: AdmisionComponent },
    { path:'universidad', component: UniversidadComponent },
    { path:'estudiantes', component: EstudiantesComponent },
  ] },
  { path:'campus', component: CampusComponent, children:[
    { path:'cursos', component: CursosComponent },
    { path:'calendario', component: CalendarioComponent },
  ] },
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
