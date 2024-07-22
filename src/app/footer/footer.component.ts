import { Component } from '@angular/core';
import { SignifyLogoComponent } from '../iconComponents/signify-logo/signify-logo.component';
import { Footerlogo1Component } from '../iconComponents/footerlogo-1/footerlogo-1.component';
import { Footerlogo2Component } from '../iconComponents/footerlogo-2/footerlogo-2.component';
import { Footerlogo3Component } from '../iconComponents/footerlogo-3/footerlogo-3.component';
import { GlopeSvgComponent } from '../iconComponents/glope-svg/glope-svg.component';
import { ArrSvgComponent } from '../iconComponents/arr-svg/arr-svg.component';
import { DynamicListsComponent } from '../sharedComponents/dynamic-lists/dynamic-lists.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SignifyLogoComponent,
    Footerlogo1Component,
    Footerlogo2Component,
    Footerlogo3Component,
    GlopeSvgComponent,
    ArrSvgComponent,
    DynamicListsComponent,
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contact: string = 'conatct@archive.ge';
  langs: any = {};
  index: number = 0;
  arr: any[] = [
    {
      title: ['გამოყენებები', 'Usage'],
      list1: ['გაყიდვები', 'Sales'],
      list2: ['ლოჯისტიკა', 'Logistics'],
      list3: ['შესყიდვები', 'Purchases'],
      list4: ['მართვა', 'Management'],
      list5: ['ფინანსები', 'Finance'],
    },
  ];

  arr2: any[] = [
    {
      title: ['რესურსები', 'Resources'],
      list1: ['მენეჯმენტი', 'Management'],
      list2: ['ლეგალურობა', 'Legality'],
      list3: ['უსაფრთხოება', 'Security'],
      list4: ['დახმარება', 'Support'],
      list5: ['დეველოპერი', 'Developer'],
    },
  ];

  arr3: any[] = [
    {
      title: ['კომპანია', 'Company'],
      list1: ['ჩვენს შესახებ', 'About Us'],
      list2: ['არქივი', 'Archive'],
      list3: ['კონტაქტი', 'Contact'],
      list4: ['ფასი', 'Price'],
      list5: ['ექსელი', 'Excel'],
    },
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }
}
