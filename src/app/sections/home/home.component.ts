// home.component.ts
import { Component, OnInit } from '@angular/core';
import { PORTFOLIO, Portfolio } from '../../data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolio: Portfolio = PORTFOLIO;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getSocialIcon(label: string): string {
    const iconMap: Record<string, string> = {
      'facebook': 'fab fa-facebook-f',
      'linkedin': 'fab fa-linkedin-in',
      'github': 'fab fa-github',
      'twitter': 'fab fa-twitter',
      'instagram': 'fab fa-instagram',
      'youtube': 'fab fa-youtube'
    };
    return iconMap[label.toLowerCase()] || 'fas fa-link';
  }
}
