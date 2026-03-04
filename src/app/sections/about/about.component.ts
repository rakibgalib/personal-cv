import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO, Portfolio } from '../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  basics = PORTFOLIO.basics;
  portfolio: Portfolio = PORTFOLIO;
  education = PORTFOLIO.education;

  constructor() {}

  ngOnInit(): void {}
}
