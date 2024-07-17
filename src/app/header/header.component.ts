import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imageLogo: any[] = [
    { url: '../../assets/img/Diplomat.jpg', alt: 'diplomat' },
    { url: '../../assets/img/Icon_Magti.jpg', alt: 'magti' },
    { url: '../../assets/img/adjarabet.jpg', alt: 'adjarabet' },
    { url: '../../assets/img/spar.jpg', alt: 'spar' },
    { url: '../../assets/img/tbc.jpg', alt: 'tbc' },
  ];

  langs: any = {};
  index: number = 324213523;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }
}
