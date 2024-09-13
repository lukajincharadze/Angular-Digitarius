import { Component } from '@angular/core';
import { ButtonComponent } from '../sharedComponents/button/button.component';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from '../sharedComponents/dynamic-content/dynamic-content.component';
import { DataService } from '../core/data.service';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [ButtonComponent, CommonModule, DynamicContentComponent],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss',
})
export class Section4Component {
  arr: any[] = [
    ['WEB აპლიკაცია', 'WEB Application'],
    ['AD-სთან ინტეგრაცია', 'Integration with AD'],
    ['Mobile ინტერფეისი', 'Mobile Interface'],
    ['მოწყობილობები', 'Devices'],
  ];
  useCaseInfo: any[] = [];
  num: number = 0;
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.useCaseInfo = this.dataService.useCaseInfo();
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }

  eventHandler(index: any) {
    this.num = index;
  }
}
