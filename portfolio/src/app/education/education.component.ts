import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  isHovered1: boolean = false;
  isHovered2: boolean = false;
  isHovered3: boolean = false;
  longText1 = "NSS College of Engineering, Palakkad is the fourth engineering educational institution established in Kerala, India. It was founded in 1960 by Nair Service Society."+
 "The college is affiliated to the APJ Abdul Kalam Technological University since its inception in 2015.";
longText2="Kendriya Vidyalaya, Puranattukara is a Kendriya Vidyalaya Sangathan school in Thrissur City under the Ministry of Human Resource Development, Government of India. Situated at the valley of the Vilangankunnu, this institution is a pride to the Cultural Capital of Kerala. ";
longText3: any;
}
