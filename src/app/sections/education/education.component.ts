import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../data'; // adjust path according to your project

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
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
