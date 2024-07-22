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
        title: ['სწრაფი', 'Immediate'],
        text: ['პაკეტირება', 'Packaging'],
        logo: '../../assets/img/stat-logo1.svg',
      },
      {
        title: ['შემოწმება', 'Verify'],
        text: ['დახარვეზება', 'Debugging'],
        logo: '../../assets/img/stat-logo2.svg',
      },
      {
        title: ['სანდო', 'Reliable'],
        text: ['მხარდაჭერა', 'Support'],
        logo: '../../assets/img/stat-logo3.svg',
      },
    ];
  }

  useCaseInfo() {
    return [
      {
        img: '../../assets/img/section4Img.webp',
        title: ['ცხრილების ექსპორტი', 'Export Tables'],
        text: [
          'ექსელში (excel) მონაცემების ფილტრებზე დაფუძნებული ექსპორტი,  შემოსული/დაბრუნებული გამოთხოვებისა და დღის რეპორტი ექსელის (excel) ცხრილის სახით.',
          'Filter-based export of data to Excel, incoming/returned requests and daily report as an Excel table.',
        ],
      },
      {
        img: '../../assets/img/section4Img2.webp',
        title: ['დროზე დაკვირვება', 'Observing time'],
        text: [
          'დროის მონაკვეთში განხორცილებულ ქმდებების აღრიცხვა, სერვის ცენტრში მოთხოვნილი ერთულის მიტანისას მომთხოვნზე ერთეულის გადაცემა',
          'Recording of the actions performed during the period of time, handing over the requested unit to the requester when the requested unit is delivered to the service center,',
        ],
      },
      {
        img: '../../assets/img/section4Img3.webp',
        title: ['პერსონა', 'Person'],
        text: [
          'პერსონის მიერ შეტანილი ცვლილებების აღრიცხვა, ბიზნეს პროცესში მონაწილე როლებისთვის საჭირო ფუნქციების მინიჭება  ',
          'According to the changes made by the person, assigning the necessary functions to the roles involved in the business process',
        ],
      },
      {
        img: '../../assets/img/section4Img4.webp',
        title: ['დეტალიზაცია', 'Detailing'],
        text: [
          'პერსონის მიერ დროის მონაკვეთში განხორციელებული ცვლილებების დეტალიზაცია',
          'Detailing changes made by a person over a period of time',
        ],
      },
      {
        img: '../../assets/img/section4Img5.webp',
        title: ['კლასიფიკაცია', 'Classification'],
        text: [
          'ოთხ ძირითად მოქმედებაზე დაკვირვება: შექმნა, რედაქტირება, წაშლა, ატვირთვა.',
          'Observe the four main actions: create, edit, delete, upload.',
        ],
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: ['მოთხოვნის რეგისტრირება', 'Request registration'],
        Desc: [
          'არქივიდან ყუთების/პაკეტების/დოკუმენტების სერვის ცენტრში მოტანის მოთხოვნის რეგისტრირება',
          'Registering a request to bring boxes/packages/documents from the archive to the service center',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse1.jpg',
      },
      {
        Title: ['მოთხოვნების მონიტორინგი', 'Request Monitoring'],
        Desc: [
          'პასუხისმგებელი პირებისთვის ჩანართი სადაც გამოჩნდება რეგისტრირებული მოთხოვნები',
          'A tab for responsible persons where registered requests will be displayed',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: [
          'რეგისტრირებულების გადამისამართება',
          'Redirect registered users',
        ],
        Desc: [
          'მოთხოვნის ტიპის მიხედვით (დედანი/სკანირებული ასლი/დედანთან დამოწმებული ასლი) ერთეულის გადაგზავნა',
          'By request type (original/scanned copy/certified copy) forward the item',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo3.svg',
        imgColor: '#FFCD00',
        picUrl: '../../assets/img/collapse3.jpg',
      },
      {
        Title: ['არქივის საწყობში ძიება', 'Search Archive Warehouse'],
        Desc: [
          'მოთხოვნილი ერთეულის ობიექტზე ორიენტირებული ლოკაციური ძებნა',
          'Object-oriented location search for the requested entity',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo4.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse4.jpg',
      },
      {
        Title: ['ლოჯისტიკა', 'Logistic'],
        Desc: [
          'ობიექტების ტრანსპორტირების მართვის მობილურზე მორეგებული აპლიკაცია',
          'A mobile-friendly application for object transportation management',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo5.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
