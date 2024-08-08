import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imageLogo: any[] = [
    { url: '../../assets/img/Acer.png', alt: 'diplomat' },
    { url: '../../assets/img/Microsoft.png', alt: 'magti' },
    { url: '../../assets/img/Oracle.png', alt: 'adjarabet' },
    { url: '../../assets/img/legrand.png', alt: 'spar' },
    { url: '../../assets/img/dell.png', alt: 'tbc' },
  ];

  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {}

  gotoSection(frag: string) {
    document.getElementById(frag)?.scrollIntoView();
  }

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }
}
