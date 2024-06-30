import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { CollapseLogo1Component } from './iconComponents/collapse-logo1/collapse-logo1.component';
import { Section3Component } from './section3/section3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CollapseLogo1Component,
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signify';
}
