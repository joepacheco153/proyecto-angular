import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from './services/alumno.service';
import { AddAlumnoComponent } from './componentes/alumnos/add-alumno/add-alumno.component';
import { ListarAlumnoComponent } from './componentes/alumnos/listar-alumno/listar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    ListarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
