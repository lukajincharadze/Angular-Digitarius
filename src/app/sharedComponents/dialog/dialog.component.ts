import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { StatesService } from '../../core/states.service';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/translation.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);
  @Input() dialogPopup: boolean = true;

  textareaContent: string = 'აღწერა';

  userMail: string = '';
  invalid: boolean = false;
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
    // this.dialogPopup = false;
    // this.stateService.isOpenDialog.next(false);
    this.dialog.closeAll();
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

    // this.dataService.sendData('http://', data).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })
    this.closeDialogPopup();
    this.disabled = true;
  }
}
