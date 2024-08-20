import { Component, Input } from '@angular/core';
import { DataService } from '../../core/data.service';
import { StatesService } from '../../core/states.service';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/translation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header-dialog.component.html',
  styleUrl: './header-dialog.component.scss',
})
export class HeaderDialogComponent {
  @Input() dialogPopup: boolean = true;

  textareaContent: string = 'აღწერა';

  userName: string = '';
  userLastname: string = '';
  userPhoneNum: string = '';
  userMail: string = '';
  userCompany: string = '';

  invalid: boolean = false;
  empty: boolean = false;

  disabled: boolean = false;
  subscription: Subscription = new Subscription();
  langs: any = {};
  index: number = 0;

  constructor(
    private dataService: DataService,
    private stateService: StatesService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.stateService.isOpenDialog.next(true);
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  closeDialogPopup() {
    this.dialogPopup = false;
    this.stateService.isOpenDialog.next(false);
  }

  request() {
    let data = {
      userMail: this.userMail,
      userCompany: this.userCompany,
      userName: this.userName,
      userLastname: this.userLastname,
      userPhoneNum: this.userPhoneNum,
    };

    this.validateEmail(this.userMail);
    if (this.validateEmail(this.userMail)) {
      this.invalid = false;
    } else {
      this.invalid = true;
      this.empty = true;

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
    this.closeDialogPopup();
    this.disabled = true;
  }
}
