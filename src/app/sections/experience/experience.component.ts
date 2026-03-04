import { Component, OnInit } from '@angular/core';
import { PORTFOLIO, Experience } from '../../data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = PORTFOLIO.experience;

  constructor() { }

  ngOnInit(): void {}
}
