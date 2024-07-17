import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.scss',
})
export class Section6Component {
  langs: any = {};
  index: number = 324213523;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }
}
