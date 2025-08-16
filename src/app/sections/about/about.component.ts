import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO, Portfolio } from '../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  basics = PORTFOLIO.basics; // <-- assign basics from your data.ts

  constructor() {}

  ngOnInit(): void {}
}
