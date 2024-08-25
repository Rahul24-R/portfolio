import { Component } from '@angular/core';
import { workexperiencemodal } from './workexperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  count = [1, 2];
  workexperience: workexperiencemodal[] = [];

  ngOnInit() {
    let a: workexperiencemodal = {
      years: 1.6,
      role: 'Software Engineer',
      startdate: 'March 2023',
      enddate: 'Present',
      company: 'GE HealthCare',
      details:[
        'Orchestrated the full lifecycle of a web application development project using React and ASP.NET Core, from conceptualization to deployment.This included requirements gathering, architecture design, full-stack development, and deployment, ensuring optimal performance, robust security, and a user-centric approach throughout',
        'Spearheaded the development of a WPF (Windows Presentation Foundation) Application with MVVM Architecture as a Monitoring and Analytics tool covering 80-90% system workflows.',
        ' Pioneered an enhanced DevOps implementation utilizing AWS services such as AWS CodePipeline and AWS CodeBuild, resulting in a scalable build process that reduced build and deployment times by 60%',
        'Equipped the WPF tool with technologies like SQLite for data management and LiveChart for data visualization.',
        'Assisted the QSE team in enhancing automated testing using MSTest technology. Integrated auto upgrade methods, resulting in an 80% efficiency boost, and reducing the necessity for future template creations and storage.'
    ]
    }
    this.workexperience?.push(a);
    let b: workexperiencemodal = {
      years: 1,
      role: 'Software Engineer Specialist',
      startdate: 'Nov 2021',
      enddate: 'Present',
      company: 'GE HealthCare',
      details: ["Continuously update expertise in SQL, .NET framework, C# programming, and .NET web application development, while staying well-versed in core product functionality, usability, and features through ongoing research.",
        "Delivered specialized technical support by proficiently debugging crash dumps along with advanced tools like WinDbg and employing various diagnostic methodologies to ensure swift and effective issue resolutions with a 100% accuracy, enhancing system performance and customer satisfaction",
        "Swiftly acquired proficiency in product technologies such as ASP.NET, SQL, stored procedures and Angular, demonstrating a rapid learning curve. Possess a foundational understanding of message broker software like RabbitMQ in a short span of 3 months",
        "Implemented solutions for complex business challenges, resulting in a 95% reduction in manual by scripts to install product at the customer site silently, drastically reducing the install time by more than 60%."]
    }
    this.workexperience.push(b);
    console.log(this.workexperience?.length);
  }
}


