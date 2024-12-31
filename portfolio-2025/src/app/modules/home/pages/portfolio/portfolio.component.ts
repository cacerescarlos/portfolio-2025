import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SkillComponent } from '../../components/skill/skill.component';
import { ProjectComponent } from '../../components/project/project.component';
import { EducationComponent } from '../../components/education/education.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports: [SharedModule, SkillComponent, ProjectComponent, EducationComponent, ContactComponent ],
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
