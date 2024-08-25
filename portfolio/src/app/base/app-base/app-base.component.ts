import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(20px)',
        opacity: 1
      })),
      transition('void =>*', [
        style({
          transform: 'translateX(90%)',
          opacity: 0
        }),
        animate('0.3s ease-in-out')
      ]),
      transition('*=>void', [
        animate('0.3s ease-in-out', style({
          transform: 'translateZ(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppBaseComponent {
  showAdditionalButton: boolean = false;
  updateddate: string ="25/05/2024";
  constructor(private renderer: Renderer2) { }
  ToggleTheme() {
    this.showAdditionalButton = !this.showAdditionalButton;
  }

}
