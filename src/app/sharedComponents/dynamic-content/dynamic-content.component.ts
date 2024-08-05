import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { TranslationService } from '../../core/translation.service';
import { Subscription } from 'rxjs';
import { StatesService } from '../../core/states.service';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.scss',
})
export class DynamicContentComponent {
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() img: string = '';

  dialogPopup: boolean = false;
  langs: any = {};
  index: number = 0;

  toggleDialogPopup() {
    this.dialogPopup = !this.dialogPopup;
  }

  subscription: Subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private stateService: StatesService
  ) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
    this.subscription.add(
      this.stateService.isOpen$.subscribe((res: any) => {
        if(res) return
        this.dialogPopup = res;
      })
    );
  }
}
