import { Component, OnInit } from '@angular/core';
import { PORTFOLIO, SkillGroup } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: SkillGroup[] = PORTFOLIO.skills;

  constructor() {}

  ngOnInit(): void {}

  getIconClass(skill: string): string {
  const icons: { [key: string]: string } = {
    'C#': 'devicon-csharp-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'Node Js': 'devicon-nodejs-plain colored',
    'SQL': 'devicon-mysql-plain colored',
    'HTML5': 'devicon-html5-plain colored',
    'CSS3': 'devicon-css3-plain colored',
    'Python': 'devicon-python-plain colored',
    'Solidity': 'devicon-solidity-plain colored',
    'Angular': 'devicon-angularjs-plain colored',           // fixed key
    '.NET Core': 'devicon-dotnetcore-plain colored',        // correct naming
    'ASP.NET MVC': 'devicon-dotnet-plain colored',
    'Web API': 'devicon-dot-net-plain colored',
    'Databases': '', // handled separately
    'Tools & Platforms': '', // placeholder
    // Some icons are unavailable in Devicon; provide fallbacks
    'Blockchain (Ethereum)': 'devicon-ethereum-plain colored',
    'Remix IDE': 'devicon-solidity-plain colored', 
    'selenium': 'devicon-selenium-original colored',         // fallback
    'ReSharper': 'devicon-jetbrains-plain colored',                      // fallback
    'Payment/SMS Gateways': 'devicon-amazonwebservices-plain colored',
    'RoomXML': 'devicon-xml-plain',
    'Visual Studio': 'devicon-visualstudio-plain colored',
    'AWS DevOps': 'devicon-amazonwebservices-original colored',
    'Git': 'devicon-git-plain colored',
    'MongoDB': 'devicon-mongodb-plain colored',
    'Oracle 11g': 'devicon-oracle-original colored',
    'SQL Server': 'devicon-microsoftsqlserver-plain colored',
    'Bootstrap': 'devicon-bootstrap-plain colored',
    'jQuery': 'devicon-jquery-plain colored',
    'Bitbucket': 'devicon-bitbucket-original colored'
    
  };

  return icons[skill] || 'devicon-code-plain'; // fallback if not found
}

}
