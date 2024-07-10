import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  sendData(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  getStatisticInfo() {
    return [
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

  useCaseInfo() {
    return [
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
  }

  getCollapseInfo() {
    return [
      {
        Title: 'დღეებიდან კლიკებამდე',
        Desc: 'უბრალოდ ატვირთე დოკუმენტი ან აირჩიე შენახული შაბლონი, მიუთითე მიმღები და გაუშვი!',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
      },
      {
        Title: 'თვალი ადევნე სტატუსს',
        Desc: 'აკონტროლე დოკუმენტის სტატუსი: ვინ გახსნა, ვინ უკვე მოაწერა ან ვის ხელმოწერას ელოდები. ავტომატურად გაგზავნე შეხსენების შეტყობინებები.',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
      },
      {
        Title: 'შეინახე და მართე',
        Desc: 'შენი დოკუმენტები უსაფრთხოდ ინახება ციფრულად, რაც გაგიმარტივებს მათ დახარისხხებასა და მოძებნას',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo3.svg',
        imgColor: '#FFCD00',
      },
      {
        Title: 'ხელმომწერის იდენტიფიკაცია',
        Desc: 'მიმღების იდენტიფიკაციისთვის შექმენი უსაფრთხოების დამატებითი საფეხური და გამოიყენე SMS კოდი, ვიდეო იდენტიფიკაცია ან კვალიფიციური ელექტრონული ხელმოწერა',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo4.svg',
        imgColor: '#2DC302',
      },
      {
        Title: 'მარტივი ინტეგრაცია',
        Desc: 'დაინტეგრირდი Rest API-ით, Zapier-ით, ან უბრალოდ ჩასვი Signify-ს iframe-ი შენს აპლიკაციაში',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo5.svg',
        imgColor: '#6C6EFB',
      },
    ];
  }
}
