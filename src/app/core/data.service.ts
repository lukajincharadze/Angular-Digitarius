import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TranslationService } from './translation.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  langs: any = {};
  index: number = 0;
  changeLang: any = new BehaviorSubject<any>(0);
  langStatus$: any = this.changeLang.asObservable();

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
        title: [
          'დოკუმენტების გაუთავებელი ძიება',
          'Endless search for documents',
        ],
        logo: '../../assets/img/searchIcon.png',
      },
      {
        title: ['არაეფექტური გამოთხოვის პროცესი', 'Inefficient claim process'],
        logo: '../../assets/img/folder.png',
      },
      {
        title: [
          'დოკუმენტების გადაადგილებასთან დაკავშირებული ხარვეზები',
          'Errors related to the movement of documents',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'ინფორმაციის დაცულობის პრობლემები',
          'Information security issues',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: ['კანონთან შესაბამისობის საკითხები', 'Legal Compliance Issues'],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'დოკუმენტების მანუალური მენეჯნემტი',
          'Manual management of documents',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'გამოთხოვილი დოკუმენტების დაბრუნების პრობლემები',
          'Problems with returning requested documents',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: ['არაეფექტური რეპორტინგი', 'Ineffective reporting'],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'არქივის ინვენტარიზაციასთან დაკავშირებული პრობლემები',
          'Problems related to archive inventory',
        ],
        logo: '../../assets/img/location.png',
      },
    ];
  }

  useCaseInfo() {
    return [
      {
        img: '../../assets/img/section4Img.webp',
        title: ['სისტემა', 'System'],
        text: [
          'არქივარიუსი ვებ-სისტემაა, მისი გამოყენებისთვის მხოლოდ ინტერნეტი დაგჭირდება',
          'Archivarius is a web system, you only need an internet connection to use it',
        ],
      },
      {
        img: '../../assets/img/section4Img2.webp',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამას მარტივად დააკავშირებს კომპანიი Active Directory-სთან - ამგვარად შეძლებ თანამშრომლების სისტემაში ჩართვას',
          'The program will easily connect the company with Active Directory - thus you will be able to include employees in the system',
        ],
      },
      {
        img: '../../assets/img/section4Img3.webp',
        title: ['ინტერფეისი', 'Interface'],
        text: [
          'პროგრამას Desktop ვერსიასთან ერთად აქვს Mobile Interface-ის, რაც ლოჯისტიკის მენეჯერებს, კურიერებს და აქრივის ოპერატორებს smartphone-ით მუშაობსი შესაძლებლობას აძლევს',
          'Along with the desktop version, the program has a mobile interface, which allows logistics managers, couriers and warehouse operators to work with a smartphone.',
        ],
      },
      {
        img: '../../assets/img/section4Img4.webp',
        title: ['გამოყენება', 'Usage'],
        text: [
          'არქივარიუსთან მარტივად დააკავშირებ როგორც ლაზერულ ისე ხელის სკანერს, ხოლო smartphone-ზე სამუშაოდ ტელეფონის კამერას გამოიყენებ',
          'You can easily connect both a laser and handheld scanner to the archiver, and you can use the phones camera to work on a smartphone.',
        ],
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: ['აღწერო დოკუმენტები', 'Descriptive documents'],
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
        Title: ['მართო ლოჯისტიკა', 'Manage logistics'],
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
        Title: ['დააორგანიზო აქრივი', 'Organize your Archive'],
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
        Title: ['გაიმარტივო ინვენტარიზაცია', 'Simplify inventory'],
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
        Title: ['სწრაფად მოიძიო დოკუმეტები', 'Find documents quickly'],
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
        Title: ['მართო როლები და უფლებები', 'Manage roles and rights'],
        Desc: [
          'ობიექტების ტრანსპორტირების მართვის მობილურზე მორეგებული აპლიკაცია',
          'A mobile-friendly application for object transportation management',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/law.png',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
