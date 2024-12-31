import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  imports: [SharedModule],
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent  implements OnInit {

  educations = [
    { title: `Bachiller en Humanidades`, body: `Colegio Daniel Rivero Ochoa, desde Febrero 1998 hasta Enero 2012 Santa Cruz, Bolivia` },
    { title: `Ingeniería en Sistemas (Licenciatura)`, body: `Universidad Autónoma Gabriel René Moreno, desde Junio 2014. Santa Cruz, Bolivia` },
    { title: `Diseño Gráfico (Curso)`, body: `EduDiseño, desde Agosto 2016 hasta Septiembre 2016 Santa Cruz de la Sierra, Bolivia` },
    { title: `Diseño UX, UI (Curso)`, body: `Crehana, desde Julio 2018 hasta Agosto 2018 Santa Cruz de la Sierra, Bolivia` },
    { title: `Gestión de proyecto Scrum (Curso)`, body: `Platzi, desde Enero 2019 hasta Febrero 2019 Santa Cruz de la Sierra, Bolivia` },
    { title: `Reparación y Mant. de PC (Cursando)`, body: `Universidad Autónoma Gabriel René Moreno, desde Septiembre 2019 Santa Cruz de la Sierra, Bolivia` },
    { title: `React, Flutter, Vue, Laravel (Cursando)`, body: `Udemy, desde Septiembre 2019 Santa Cruz de la Sierra, Bolivia` },
    { title: `MEAN Stack Avanzado (Curso)`, body: `MEAN (MongoDB, Express, Angular, Node.js) Udemy, desde Octubre 2017 hasta Junio 2018 Santa Cruz de la Sierra, Bolivia` },
    { title: `Ionic v3,4,5, PWA, Avanzado (Curso)`, body: `Udemy, desde Octubre 2017 hasta Junio 2018 Santa Cruz de la Sierra, Bolivia` },
    { title: `Servidor VPS (Curso)`, body: `Desde Abril 2020 hasta Marzo 2020 Santa Cruz de la Sierra, Bolivia` },
    { title: `Microservicios (Cursando)`, body: `Desde Enero 2021 Santa Cruz de la Sierra, Bolivia` },
    { title: `Estandares de código y principios SOLID`, body: `Desde Enero 2021 Santa Cruz de la Sierra, Bolivia` },
  ];

  constructor() { }

  ngOnInit() {}

  openIndex: number | null = null; // Índice del acordeón actualmente abierto

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index; // Cierra si está abierto, abre si está cerrado
  }

  isOpen(index: number): boolean {
    return this.openIndex === index; // Verifica si el acordeón está abierto
  }

}
