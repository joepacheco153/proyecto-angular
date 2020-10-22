import { Component, OnInit } from '@angular/core';
import { Alumno, Escuela } from 'src/app/modelo/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  alumnos:Alumno[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumnos();
  }

}
