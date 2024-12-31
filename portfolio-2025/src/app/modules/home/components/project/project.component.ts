import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  imports: [SharedModule],
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  pathWork = 'images/works/';
  
  works = [
    { name: 'Mi Hogar 4', image: 'mihogar_4.jpg', category: 'WEB' },
    { name: 'Mi Hogar 2', image: 'mihogar_2.jpg', category: 'WEB' },
    { name: 'Criollos 3', image: 'criollos_3.jpg', category: 'WEB' },
    { name: 'Clanminer 1', image: 'clanminer_1.jpg', category: 'WEB' },
    { name: 'Grido 1', image: 'grido_1.jpg', category: 'APP' },
    { name: 'Chat 2', image: 'chat_2.jpg', category: 'APP' },
    { name: 'UX 1', image: 'ux_1.jpg', category: 'UX' },
    { name: 'UX 2', image: 'ux_2.jpg', category: 'UX' },
    { name: 'Print', image: 'print_1.jpg', category: 'SOFT' },
    { name: 'Print', image: 'print_2.jpg', category: 'SOFT' },
    { name: 'Print', image: 'print_3.jpg', category: 'SOFT' },
  ];

  filteredWorks = this.works;
  selectedImage: string | null = null;

  constructor() { }


  ngOnInit(): void { }

  activeFilter: string = 'all'; // Por defecto, el filtro activo es "Todos"

filterWorks(category: string): void {
  this.activeFilter = category; // Establece el filtro activo
  if (category === 'all') {
    this.filteredWorks = this.works; // Muestra todos los proyectos
  } else {
    this.filteredWorks = this.works.filter(work => work.category === category);
  }
}


  openImageViewer(image: string): void {
    this.selectedImage = image; // Establece la imagen seleccionada
  }
  
  closeImageViewer(): void {
    this.selectedImage = null; // Limpia la imagen seleccionada
  }
  
  preventClose(event: MouseEvent): void {
    event.stopPropagation(); // Evita que el clic cierre el modal
  }
  

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePressed(event: KeyboardEvent): void {
    this.closeImageViewer();
  }
}
