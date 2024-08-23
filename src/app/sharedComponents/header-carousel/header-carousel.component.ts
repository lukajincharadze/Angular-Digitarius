import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-carousel',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header-carousel.component.html',
  styleUrl: './header-carousel.component.scss',
})
export class HeaderCarouselComponent {
  translate: number = 0;
  contwidth = 100;

  ngOnInit() {
    this.contwidth = 100 * this.images.length;
  }

  images = [
    'https://images.unsplash.com/photo-1683014221663-a99a4de08a03?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1665149368357-864968813478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1723369124721-180613159c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1647681105535-b3d6e4f1a0b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
  ];

  prev() {
    this.translate =
      this.translate == 0
        ? -(100 - 100 / this.images.length)
        : this.translate + 100 / this.images.length;
  }
  next() {
    this.translate =
      this.translate == -(100 - 100 / this.images.length)
        ? 0
        : this.translate - 100 / this.images.length;
  }
}
