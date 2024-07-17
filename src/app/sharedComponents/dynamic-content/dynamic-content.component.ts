import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { TranslationService } from '../../core/translation.service';

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
  @Input() btnText: string = 'გაიგე მეტი';

  dialogPopup: boolean = false;
  langs: any = {};
  index: number = 324213523;

  toggleDialogPopup() {
    this.dialogPopup = !this.dialogPopup;
  }

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }
}
