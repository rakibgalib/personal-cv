import { bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/sections/home/home.component';
import { AboutComponent } from './app/sections/about/about.component';

import { SkillsComponent } from './app/sections/skills/skills.component';
import { ExperienceComponent } from './app/sections/experience/experience.component';
import { PortfolioComponent } from './app/sections/portfolio/portfolio.component';
import { EducationComponent } from './app/sections/education/education.component';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
       { path: 'portfolio', component: PortfolioComponent },
       { path: 'education', component: EducationComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ]
});