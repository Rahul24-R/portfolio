import { Component } from '@angular/core';
import { workexperiencemodal } from './workexperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  count =[1,2];
  workexperience:workexperiencemodal[] = [];

  ngOnInit(){
    let a : workexperiencemodal = {
      years: 1.2,
      role: 'Software Engineer',
      startdate: 'March 2023',
      enddate: 'Present',
      company: 'GE HealthCare',
      details: ["Spearheaded the development of a WPF (Windows Presentation Foundation) Application with MVVM Architecture as a Monitoring and Analytics tool covering 80-90% system workflows.",
      "Equipped the WPF tool with technologies like SQLite for data management and LiveChart for data visualization.",
      "Assisted the QSE team in enhancing automated testing using MSTest technology. Integrated auto upgrade methods, resulting in an 80% efficiency boost, and reducing the necessity for future template creations and storage."]
    }
    this.workexperience?.push(a);
    console.log(this.workexperience?.length);
  }
}


