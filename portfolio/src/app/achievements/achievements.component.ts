import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { professionalachievement } from './professional-achievement';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  embeddedTweet: SafeHtml = '';
 professionalachievements:professionalachievement[] =[
  {
    id: 1,
    date: new Date(2022,3,25).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    type:"Delivery with Focus",
    presenter:"Shashank Chaturvedi",
    description:"In a Very short span of time. he has ramped-up on both technology and process to deliver the assigned storied on time even though the learning curve is exponential for him. Keep up the good work !"
  },
  {
    id:2,
    date: new Date(2022,8,5).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), 
    type:"Delivery with Focus",
    presenter:"Abhijit Ojha",
    description:"Customer feedback -'The EA Silent Installation feature was very easy to use and can be a huge time saver when deploying multiple nodes of EA.Ron,Dan and I were delighted by the ease of use and how it can minimize the clicks during the installation.' Keep up the good work !"
  },
  {
    id:3,
    date: new Date(2022,11,28).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    type:"Delivered with Quality",
    presenter:"Abhijit Ojha",
    description:"Thank you for your support and deliverables as part of the Green team. I would like to expect the same support in the future.PLease keep up the good work."
  },{
    id:4,
    date:new Date(2023,6,26).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    type:"Deliver with Focus",
    presenter:"Varun Mahindrakar",
    description:"Rahul ramped up very quickly and he is very flexible and has been consistently committed to deliver all the assigned IB task in avery quick span of time, quick turn around and available for taking any tasks and participate in various discussions and provide valueable inputs, worked on challenging investigations like DICOM C_FIND to query SpeedSpan-PIX, crash 409 , issues in sql error logins, shadowing tie out issue and couples of SPRs and many more. I want to thank you for all your support & contributions and keep the same momentum going further."
  },
  {
    id:5,
    date:new Date(2023,10,30).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    type:"Deliver with Focus - Contribution for FMI release",
    presenter:"Santosh P",
    description:"Rahul was very proactive in starting the implementation for Phase 1 of FMI fix. He showed great patience in the changing phase 1 script multple times and collaborated with US team in implementing the script. Additionally, he contributed in improving TAF patch installer test case to resuse the base template for patch upgrade tests. HE has been very proactive and showed lot of energy in taking up any task and closing in quick time."
  },
  {
    id:6,
    date:new Date(2024,2,1).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    type:"Win together and have fun",
    presenter:"Abhijit Ojha",
    description:"Rahul is consistently delivering all the assigned features & any additional scope comes as part of exosting features in avery quick span of time, this helped team to improve the productivity without compromising on quality. Keep up the good work !"
  }
 ]

  constructor(private sanitizer: DomSanitizer, private router: Router) { }
  expandedStates: boolean[] = [];

  toggleExpansion(index: number): void {
    this.expandedStates[index] = !this.expandedStates[index];
  }

  ngOnInit(): void {
    // Replace this with the actual Twitter embed code you provided
    const twitterEmbedCode = `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Last year, we launched the DII contest, which received an overwhelming participation
                of 12,000+ entries! After the multiple stages, we are excited to announce the winners. Congratulations
                to you all! Here&#39;s to building a generation of tech-designers from India.<a
                    href="https://twitter.com/hashtag/ProudlyIndian?src=hash&amp;ref_src=twsrc%5Etfw">#ProudlyIndian</a>
                <a href="https://t.co/lNeA98A07J">pic.twitter.com/lNeA98A07J</a></p>&mdash; Lava Mobiles (&#64;LavaMobile)
            <a href="https://twitter.com/LavaMobile/status/1397901021125373952?ref_src=twsrc%5Etfw">May 27, 2021</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    this.embeddedTweet = this.sanitizer.bypassSecurityTrustHtml(twitterEmbedCode);
  }
}
