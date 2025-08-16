import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { EducationComponent } from './sections/education/education.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
{ path: 'experience', component: ExperienceComponent },
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'education', component: EducationComponent },
];
