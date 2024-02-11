import { Component } from '@angular/core';
import {  Renderer2 } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css']
})
export class AppBaseComponent {
  darkMode = false;
  constructor(private renderer: Renderer2) {}
  ToggleTheme() {
    this.darkMode = !this.darkMode;
    const divToToggle = document.getElementsByClassName('start')
    if (this.darkMode) {
      this.renderer.addClass(divToToggle, 'dark-theme');
    } else {
      this.renderer.removeClass(divToToggle, 'dark-theme');
    }
  }

}
