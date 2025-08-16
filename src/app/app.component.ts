import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';

import { RouterModule } from '@angular/router'; // <-- import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,

    RouterModule,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-cv';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'dark-vertion');
    this.renderer.addClass(document.body, 'black-bg');
  }
}
