import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  imageLogo: any[] = [
    {
      url: '../../assets/img/Diplomat.jpg',
      alt: 'diplomat',
    },
    {
      url: '../../assets/img/Icon_Magti.jpg',
      alt: 'magti',
    },
    {
      url: '../../assets/img/adjarabet.jpg',
      alt: 'adjarabet',
    },
    {
      url: '../../assets/img/spar.jpg',
      alt: 'spar',
    },
    {
      url: '../../assets/img/tbc.jpg',
      alt: 'tbc',
    },
  ];
}
