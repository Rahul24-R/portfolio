import { NgModule } from '@angular/core';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'',component:WorkExperienceComponent},
  {path:'work-experience',component:WorkExperienceComponent},
  {path:'education',component:EducationComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'reviews',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
