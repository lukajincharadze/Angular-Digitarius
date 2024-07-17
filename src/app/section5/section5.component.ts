import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/productservice.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../sharedComponents/dialog/dialog.component';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.scss',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    CommonModule,
    DialogComponent,
  ],
  providers: [ProductService],
})
export class Section5Component implements OnInit {
  products: any[] = [];
  dialogPopup: boolean = false;
  langs: any = {};
  index: number = 324213523;

  responsiveOptions: any[] = [
    {
      breakpoint: '1350px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '950px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private productService: ProductService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }

  toggleDialogPopup() {
    this.dialogPopup = !this.dialogPopup;
  }
}
