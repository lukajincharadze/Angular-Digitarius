import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

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

  toggleDialogPopup() {
    this.dialogPopup = !this.dialogPopup;
  }
}
