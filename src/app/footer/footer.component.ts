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
  arr: any[] = [
    {
      title: 'გამოყენებები',
      list1: 'გაყიდვები',
      list2: 'ლოჯისტიკა',
      list3: 'შესყიდვები',
      list4: 'მართვა',
      list5: 'ფინანსები',
    },
  ];
  arr2: any[] = [
    {
      title: 'რესურსები',
      list1: 'მენეჯმენტი',
      list2: 'ლეგალურობა',
      list3: 'უსაფრთხოება',
      list4: 'დახმარება',
      list5: 'დეველოპერი',
    },
  ];
  arr3: any[] = [
    {
      title: 'კომპანია',
      list1: 'ჩვენს შესახებ',
      list2: 'არქივი',
      list3: 'კონტაქტი',
      list4: 'ფასი',
      list5: 'ექსელი',
    },
  ];

  langs: any = {};
  index: number = 324213523;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }
}
