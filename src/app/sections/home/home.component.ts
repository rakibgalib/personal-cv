// home.component.ts
import { Component, OnInit } from '@angular/core';
import { PORTFOLIO, Portfolio } from '../../data'; // adjust the path if needed
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-home',
  standalone: true,   // your component is standalone
  imports: [
    CommonModule,      // <-- add this
    // any other components or modules you need
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolio: Portfolio = PORTFOLIO;

  constructor() {}

  ngOnInit(): void {}
}
