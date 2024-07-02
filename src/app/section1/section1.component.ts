import { Component } from '@angular/core';
import { CardComponentComponent } from '../sharedComponents/card-component/card-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CardComponentComponent, CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss',
})
export class Section1Component {
  arr: any[] = [
    {
      title: '5<small>x</small>',
      text: 'სწრაფი პროცესი',
      logo: '../../assets/img/stat-logo1.svg',
    },
    {
      title: '70<small>%</small>',
      text: 'შემცირებული ხარჯი',
      logo: '../../assets/img/stat-logo2.svg',
    },
    {
      title: '1<small>დღე</small>',
      text: 'დასანერგად',
      logo: '../../assets/img/stat-logo3.svg',
    },
  ];
}
