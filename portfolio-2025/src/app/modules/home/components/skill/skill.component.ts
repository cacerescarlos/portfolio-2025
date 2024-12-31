import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  imports: [SharedModule],
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit, OnDestroy {
  skills = [
    { name: 'Angular', logo: 'https://miro.medium.com/max/1200/1*kkXbE9GlS73U7x1iXHP_vQ.png', link: 'https://angular.io/' },
    { name: 'Ionic', logo: 'https://cdn-images-1.medium.com/max/800/1*U01ubQ9TrE1Zow5pkGHTfw.png', link: 'https://ionicframework.com/' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1200px-Ionic_Logo.svg.png', link: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
    { name: 'HTML & CSS', logo: 'https://clipart.info/images/ccovers/1499794875html-css-php-mysql-logo-png-transparent.png', link: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png', link: 'https://git-scm.com/' },
    { name: 'Node.js', logo: 'https://i.pinimg.com/originals/ee/06/80/ee0680d882601008ed1960c830c8fe33.png', link: 'https://nodejs.org/' }
  ];

  currentTranslate = 0;
  intervalId: any;
  transformStyle = '';

  constructor() {}

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startSlider(): void {
    const itemWidth = 170; // Ancho del logo más margen
    const totalWidth = this.skills.length * itemWidth; // Ancho total de los logos

    this.intervalId = setInterval(() => {
      this.currentTranslate -= 1; // Mover 1px a la izquierda
      if (Math.abs(this.currentTranslate) >= totalWidth) {
        this.currentTranslate = 0; // Reiniciar al principio
      }
      this.transformStyle = `translateX(${this.currentTranslate}px)`;
    }, 16); // Aproximadamente 60 FPS
  }
}