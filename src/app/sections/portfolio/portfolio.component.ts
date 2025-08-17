import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO, Project } from '../../data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = PORTFOLIO.projects;
  expanded: boolean[] = [];

  constructor() {
    // Initially collapse all descriptions
    this.expanded = this.projects.map(() => false);
  }

  toggleDescription(index: number) {
    this.expanded[index] = !this.expanded[index];
  }

  getShortText(text: string, limit: number = 100): string {
    return text.length <= limit ? text : text.substring(0, limit) + '...';
  }

  // Map tech names from data.ts to devicon / font-awesome classes
  private techIconMap: Record<string, string> = {
    '.NET': 'devicon-dot-net-plain colored',
    '.NET Core': 'devicon-dotnetcore-plain colored',
    'ASP.NET': 'devicon-dotnet-plain colored',
    'Html': 'devicon-html5-plain colored',
    'Bootstrap': 'devicon-bootstrap-plain colored',
    'CSS': 'devicon-css3-plain colored',
    'Jquery': 'devicon-jquery-plain colored',
    'C#': 'devicon-csharp-plain colored',
    'Angular': 'devicon-angularjs-plain colored',
    'SQL Server': 'devicon-microsoftsqlserver-plain colored',
    'Oracle': 'devicon-oracle-original colored',
    'Node js': 'devicon-nodejs-plain-wordmark colored',
    
    'React': 'devicon-react-original colored',
    'Mongo DB': 'devicon-mongodb-plain colored',
  'Ethereum': 'devicon-ethereum-original colored',
  'Solidity': 'devicon-solidity-plain colored'
  };

  iconFor(tech: string): string {
    // Try exact match first
    if (this.techIconMap[tech]) return this.techIconMap[tech];

    // Light heuristics for variations
    const t = tech.toLowerCase();
    if (t.includes('angular')) return 'devicon-angular-plain colored';
    if (t.includes('.net') || t.includes('asp.net')) return 'devicon-dotnet-plain colored';
    if (t.includes('sql server')) return 'devicon-microsoftsqlserver-plain colored';
    if (t.includes('rest')) return 'fa fa-plug';

    // Default generic icon
    return 'fa fa-tag';
  }
}
