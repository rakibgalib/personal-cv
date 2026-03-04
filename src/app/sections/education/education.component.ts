import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any[] = [];
  certifications: any[] = [];

  ngOnInit(): void {
    this.education = PORTFOLIO.education;
    this.certifications = PORTFOLIO.certifications;
  }
}
