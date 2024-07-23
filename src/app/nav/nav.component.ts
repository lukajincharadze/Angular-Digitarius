import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  text: string = 'Geo';
  langs: any = {};
  index: number = 0;
  isOverlayActive: boolean = false;

  constructor(
    private translationService: TranslationService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  toggleOverlay() {
    this.isOverlayActive = !this.isOverlayActive;
  }

  changeText() {
    this.text = this.text === 'Geo' ? 'Eng' : 'Geo';
    this.translationService.index = this.translationService.index === 1 ? 0 : 1;
    this.dataService.index = this.dataService.index === 1 ? 0 : 1;
    this.index = this.translationService.index;
    this.translationService.changeLang.next(this.index);
    this.dataService.changeLang.next(this.index);
  }
}
