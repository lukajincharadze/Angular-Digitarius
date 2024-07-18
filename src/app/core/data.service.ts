import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TranslationService } from './translation.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  langs: any = {};
  index: number = 0;
  subscription: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private translationService: TranslationService
  ) {}

  sendData(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
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

  getStatisticInfo() {
    return [
      {
        title:
          this.translationService.langs.sectionSubTitle1[
            this.translationService.index
          ],
        text: 'პაკეტირება',
        logo: '../../assets/img/stat-logo1.svg',
      },
      {
        title: 'შემოწმება<small></small>',
        text: 'დახარვეზება',
        logo: '../../assets/img/stat-logo2.svg',
      },
      {
        title: 'სანდო<small></small>',
        text: 'მხარდაჭერა',
        logo: '../../assets/img/stat-logo3.svg',
      },
    ];
  }

  useCaseInfo() {
    return [
      {
        img: '../../assets/img/section4Img.webp',
        title: 'ცხრილების ექსპორტი',
        text: 'ექსელში (excel) მონაცემების ფილტრებზე დაფუძნებული ექსპორტი,  შემოსული/დაბრუნებული გამოთხოვებისა და დღის რეპორტი ექსელის (excel) ცხრილის სახით. ',
      },
      {
        img: '../../assets/img/section4Img2.webp',
        title: 'დროზე დაკვირვება',
        text: 'დროის მონაკვეთში განხორცილებულ ქმდებების აღრიცხვა, სერვის ცენტრში მოთხოვნილი ერთულის მიტანისას მომთხოვნზე ერთეულის გადაცემა ',
      },
      {
        img: '../../assets/img/section4Img3.webp',
        title: 'პერსონა',
        text: 'პერსონის მიერ შეტანილი ცვლილებების აღრიცხვა, ბიზნეს პროცესში მონაწილე როლებისთვის საჭირო ფუნქციების მინიჭება  ',
      },
      {
        img: '../../assets/img/section4Img4.webp',
        title: 'დეტალიზაცია',
        text: 'პერსონის მიერ დროის მონაკვეთში განხორციელებული ცვლილებების დეტალიზაცია ',
      },
      {
        img: '../../assets/img/section4Img5.webp',
        title: 'კლასიფიკაცია',
        text: 'ოთხ ძირითად მოქმედებაზე დაკვირვება: შექმნა, რედაქტირება, წაშლა, ატვირთვა.',
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: 'მოთხოვნის რეგისტრირება',
        Desc: 'არქივიდან ყუთების/პაკეტების/დოკუმენტების სერვის ცენტრში მოტანის მოთხოვნის რეგისტრირება',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse1.jpg',
      },
      {
        Title: 'მოთხოვნების მონიტორინგი',
        Desc: 'პასუხისმგებელი პირებისთვის ჩანართი სადაც გამოჩნდება რეგისტრირებული მოთხოვნები',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: 'რეგისტრირებულების გადამისამართება',
        Desc: 'მოთხოვნის ტიპის მიხედვით (დედანი/სკანირებული ასლი/დედანთან დამოწმებული ასლი) ერთეულის გადაგზავნა',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo3.svg',
        imgColor: '#FFCD00',
        picUrl: '../../assets/img/collapse3.jpg',
      },
      {
        Title: 'არქივის საწყობში ძიება',
        Desc: 'მოთხოვნილი ერთეულის ობიექტზე ორიენტირებული ლოკაციური ძებნა ',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo4.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse4.jpg',
      },
      {
        Title: 'ლოჯისტიკა',
        Desc: 'ობიექტების ტრანსპორტირების მართვის მობილურზე მორეგებული აპლიკაცია',
        learnMore: 'გაიგე მეტი',
        imgUrl: '../../assets/img/collapseLogo5.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
