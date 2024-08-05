import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/productservice.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../sharedComponents/dialog/dialog.component';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';
import { StatesService } from '../core/states.service';

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
  index: number = 0;

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

  subscription: Subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private stateService: StatesService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
    this.subscription.add(
      this.stateService.isOpen$.subscribe((res: any) => {
        if(res) return
        this.dialogPopup = res;
      })
    );
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
