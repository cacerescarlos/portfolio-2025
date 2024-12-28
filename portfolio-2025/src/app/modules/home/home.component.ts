import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [SharedModule],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
