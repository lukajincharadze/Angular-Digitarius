import { Component } from '@angular/core';
import { SignifyLogoComponent } from '../iconComponents/signify-logo/signify-logo.component';
import { Footerlogo1Component } from '../iconComponents/footerlogo-1/footerlogo-1.component';
import { Footerlogo2Component } from '../iconComponents/footerlogo-2/footerlogo-2.component';
import { Footerlogo3Component } from '../iconComponents/footerlogo-3/footerlogo-3.component';
import { GlopeSvgComponent } from '../iconComponents/glope-svg/glope-svg.component';
import { ArrSvgComponent } from '../iconComponents/arr-svg/arr-svg.component';
import { DynamicListsComponent } from '../sharedComponents/dynamic-lists/dynamic-lists.component';
import { CommonModule } from '@angular/common';

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
  contact: string = 'conatct@signify.ge';
  arr: any[] = [
    {
      title: 'გამოყენებები',
      list1: 'გაყიდვები',
      list2: 'HR',
      list3: 'შესყიდვები',
      list4: 'ფრონტ ოფისი',
      list5: 'ფინანსები',
    },
  ];
  arr2: any[] = [
    {
      title: 'რესურსები',
      list1: 'ბლოგი',
      list2: 'ლეგალურობა',
      list3: 'უსაფრთხოება',
      list4: 'დახმარება',
      list5: 'დეველოპერებისთვის',
    },
  ];
  arr3: any[] = [
    {
      title: 'კომპანია',
      list1: 'ჩვენს შესახებ',
      list2: 'ტური',
      list3: 'კონტაქტი',
      list4: 'ფასი',
      list5: 'შესაბამისობა',
    },
  ];
}
