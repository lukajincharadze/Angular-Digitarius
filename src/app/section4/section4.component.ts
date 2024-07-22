import { Component } from '@angular/core';
import { ButtonComponent } from '../sharedComponents/button/button.component';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from '../sharedComponents/dynamic-content/dynamic-content.component';
import { DataService } from '../core/data.service';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [ButtonComponent, CommonModule, DynamicContentComponent],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss',
})
export class Section4Component {
  arr: any[] = [
    ['ექსელი', 'Excel'],
    ['მენეჯმენტი', 'Managment'],
    ['აღრიცხვა', 'Accounting'],
    ['აღწერა', 'Description'],
    ['კლასი', 'Class'],
  ];
  useCaseInfo: any[] = [];
  num: number = 0;
  langs: any = {};
  index: number = 324213523;

  constructor(
    private dataService: DataService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.useCaseInfo = this.dataService.useCaseInfo();
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  eventHandler(index: any) {
    this.num = index;
  }
}
