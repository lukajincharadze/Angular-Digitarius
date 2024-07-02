import { Component } from '@angular/core';
import { ButtonComponent } from '../sharedComponents/button/button.component';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from '../sharedComponents/dynamic-content/dynamic-content.component';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [ButtonComponent, CommonModule, DynamicContentComponent],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss',
})
export class Section4Component {
  arr: any[] = ['გაყიდვები', 'შესყიდვები', 'HR', 'ფინანსები', 'ფრონტ ოფისი'];

  arr2: any[] = [
    {
      img: '../../assets/img/section4Img.webp',
      title: 'გაუმარტივე ცხოვრება შენს კლიენტებს',
      text: 'შეამცირე ბიუროკრატია, გააციფრულე რუტინული პროცესები და ჩახურე კონტრაქტები უფრო სწრაფად. შექმენი დაკონტრაქტების სასიამოვნო პროცესი შენი კლიენტებისთვის.',
    },
    {
      img: '../../assets/img/section4Img2.webp',
      title: 'გაამარტივე შესყიდვების პროცესი',
      text: 'ნუ დაკარგავ დროს ბეჭდვაში, დასკანერებასა და დოკუმენტების აქეთ-იქით გაგზავნაში. მართე მთლიანი პროცესი ციფრულად შეკვეთის გაფორმებიდან დაკონტრაქტებამდე.',
    },
    {
      img: '../../assets/img/section4Img3.webp',
      title: 'გააუმჯობესე თანამშრომლის დაკონტრაქტება',
      text: 'გააციფრულე HR პროცესები და გაამარტივე თანამშრომლების დოკუმენტების მართვა. ნუ დაკარგავ ძვირფას დროს ფურცლომანიაზე.',
    },
    {
      img: '../../assets/img/section4Img4.webp',
      title: 'მართე ფინანსური დოკუმენტები მარტივად',
      text: 'ნუღარ დახარჯავ ძვირფას დროს დოკუმენტების დევნაში. გააციფრულე პროცესები და დააკონტრაქტე სწრაფად, მარტივად, ყველა რეგულაციის დაცვით.',
    },
    {
      img: '../../assets/img/section4Img5.webp',
      title: 'გააქრე ფურცლები ფრონტ ოფისიდან',
      text: 'გააქრე ფურცლები ფრონტ ოფისიდან შეამცირე კლიენტის მომსახურების დრო, მექანიკური შეცდომები და დაზოგე ფურცლებზე ბეჭდვის ხარჯები. გამოცადე Signify PAD-ები და გააუმჯობესე მომხმარებელთა გამოცდილება.',
    },
  ];

  foo: number = 0;
  eventHandler(index: any) {
    this.foo = index;
    // this.states.btnIndex = this.index;
  }
}
