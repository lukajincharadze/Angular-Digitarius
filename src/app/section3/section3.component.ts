import { Component } from '@angular/core';
import { Section3LogoComponent } from '../iconComponents/section3-logo/section3-logo.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [Section3LogoComponent, FormsModule, CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss',
})
export class Section3Component {
  foo: string = '';
  disabled: boolean = false;
  incorrect: boolean = false;

  constructor(private dataService: DataService) {}
  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  request() {
    let data = { userMail: this.foo };
    console.log(this.foo);

    this.validateEmail(this.foo);
    if (this.validateEmail(this.foo)) {
      this.incorrect = false;
    } else {
      this.incorrect = true;
      return;
    }
    this.dataService.sendData('http://127.0.0.1:5000/mail', data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    this.disabled = true;
  }
}
