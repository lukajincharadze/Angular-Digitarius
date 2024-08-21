import { Component } from '@angular/core';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-header-carousel',
  standalone: true,
  imports: [
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
  ],
  templateUrl: './header-carousel.component.html',
  styleUrl: './header-carousel.component.scss',
})
export class HeaderCarouselComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    };
    this.slides[1] = {
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
    };
    this.slides[2] = {
      src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    };
  }
}
