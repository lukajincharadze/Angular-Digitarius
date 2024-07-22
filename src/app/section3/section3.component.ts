import { Component } from '@angular/core';
import { Section3LogoComponent } from '../iconComponents/section3-logo/section3-logo.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/data.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [Section3LogoComponent, FormsModule, CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss',
})
export class Section3Component {
  userMail: string = '';
  disabled: boolean = false;
  invalid: boolean = false;
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private translationService: TranslationService
  ) {}
  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  request() {
    let data = { userMail: this.userMail };

    this.validateEmail(this.userMail);
    if (this.validateEmail(this.userMail)) {
      this.invalid = false;
    } else {
      this.invalid = true;
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

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }
}
