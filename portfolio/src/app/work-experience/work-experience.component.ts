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
      years: 0,
      role: 'nljnllj',
      startdate: ',mnmmnl',
      enddate: ',mmnmn',
      company: 'm,;m,;',
      details: ["jhhjhhhkjkjhj","njnjnnnjnj","nbkkbjkjjbjjbbjbbjb"]
    }
    this.workexperience?.push(a);
    console.log(this.workexperience?.length);
  }
}


