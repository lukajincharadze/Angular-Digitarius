import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss',
})
export class CardComponentComponent {
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() logo: string = '';
}
