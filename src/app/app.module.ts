import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdmisionComponent } from './components/admision/admision.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CampusVirtualComponent } from './components/campus-virtual/campus-virtual.component';
import { LandingComponent } from './components/landing/landing.component';
import { CampusComponent } from './components/campus/campus.component';
import { SideBarCampusComponent } from './components/side-bar-campus/side-bar-campus.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmisionComponent,
    UniversidadComponent,
    EstudiantesComponent,
    HomeComponent,
    NotFoundComponent,
    CampusVirtualComponent,
    LandingComponent,
    CampusComponent,
    SideBarCampusComponent,
    CursosComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
