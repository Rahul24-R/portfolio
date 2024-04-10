import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBaseComponent } from './base/app-base/app-base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReviewComponent } from './review/review.component';
import { LucideAngularModule, ChevronRight, Instagram, AtSign, Github, Download, Linkedin, BookOpenText, BookOpen, Book ,Award} from 'lucide-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AppBaseComponent,
    WorkExperienceComponent,
    EducationComponent,
    AchievementsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LucideAngularModule.pick({ ChevronRight, Instagram, AtSign, Github, Download, Linkedin, BookOpenText, BookOpen, Book,Award }),
    MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
