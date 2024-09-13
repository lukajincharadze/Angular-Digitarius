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
          'Errors related with document relocation',
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
          'Manual handling of paper documents',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'გამოთხოვილი დოკუმენტების დაბრუნების პრობლემები',
          'Issues with document returns',
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
          'Issues with archive inventory management',
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
          'დიჯიტარიუსი ვებ-სისტემაა, მისი გამოყენებისთვის მხოლოდ ინტერნეტი დაგჭირდება',
          'Archivarius is a web system, you only need an internet connection to use it',
        ],
      },
      {
        img: '../../assets/img/section4Img2.webp',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამას მარტივად დააკავშირებ კომპანიის Active Directory-სთან და მარტივად შეძლებ თანამშრომლების სისტემაში ჩართვას',
          "You can easily connect the program with the company's Active Directory and you can easily include employees in the system",
        ],
      },
      {
        img: '../../assets/img/section4Img3.webp',
        title: ['ინტერფეისი', 'Interface'],
        text: [
          'პროგრამას Desktop ვერსიასთან ერთად აქვს Mobile Interface-ი, რაც ლოჯისტიკის მენეჯერებს, კურიერებს და არქივის ოპერატორებს smartphone-ით მუშაობის შესაძლებლობას აძლევს',
          'Along with the desktop version, the program has a mobile interface, which allows logistics managers, couriers and archive operators to work with a smartphone',
        ],
      },
      {
        img: '../../assets/img/section4Img4.webp',
        title: ['გამოყენება', 'Usage'],
        text: [
          'დიჯიტარიუსთან მარტივად დააკავშირებ როგორც ლაზერულ, ისე ხელის სკანერს. ხოლო smartphone-ზე სამუშაოდ ტელეფონის კამერას გამოიყენებ',
          "You can easily connect both laser and handheld scanners to Digitarius. And to work on a smartphone, you will use the phone's camera",
        ],
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: ['აღწერო დოკუმენტები', 'Digitally classify documents'],
        Desc: [
          'სისტემა აღრიცხავს დოკუმენტების ნომერს, ტიპს, თარიღსა და წარმოქმნის სერვის-ცენტრს',
          'The system registers the document number, type, date and generates the service center',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse1.jpg',
      },
      {
        Title: ['მართო ლოჯისტიკა', 'Manage logistics'],
        Desc: [
          'დავალება ციფრულად ემაგრება კურიერს, მოდის არქივში წინასწარ გამზადებულ სივრცეში, მოწმდება და თავსდება არქივის შესაბამის ლოკაციაზე - სრული პროცესი ციფრულად აისახება პროგრამაში',
          'The task is digitally attached to the courier, comes to the archive in a pre-prepared space, is checked and placed in the appropriate location of the archive - the whole process is digitally reflected in the program',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: ['დააორგანიზო აქრივი', 'Organize your Archive'],
        Desc: [
          'დიჯიტარიუსი აღწერს ფიზიკური არქივის ყველანაირ სპეციფიკაციას - თაროებს, დარბაზებს და ა.შ.  ხოლო თითოეული ყუთის უნიკალური შტრიხკოდი იძლევა ინფორმაციას არქივში მისი ლოკაციის შესახებ',
          'Digitarius describes all the specifications of a physical archive - shelves, halls, etc. And the unique barcode of each box provides information about its location in the archive',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: ['გაიმარტივო ინვენტარიზაცია', 'Simplify inventory'],
        Desc: [
          'სისტემურად ფიქსირდება თითოეული ინვენტარიზაციის დეტალები და თარიღი',
          'The details and date of each inventory are systematically recorded',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo3.svg',
        imgColor: '#FFCD00',
        picUrl: '../../assets/img/collapse3.jpg',
      },
      {
        Title: ['სწრაფად მოიძიო დოკუმეტები', 'Find documents quickly'],
        Desc: [
          'სისტემურად შესაძლებელია მოიძებნოს თითოეული ყუთი, პაკეტი და მასში შემავალი დოკუმენტები. ასევე, ინფორმაცია თუ როდის შემოვიდა არქივში ესა თუ ის დოკუმენტი',
          'Systematically, each box, package and the documents contained in it can be searched. Also, information about when this or that document entered the archive',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo4.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse4.jpg',
      },
      {
        Title: ['მართო როლები და უფლებები', 'Manage roles and rights'],
        Desc: [
          'დიჯიტარიუსი სრულად მოერგება შენი ორგანიზაციის სტრუქტურას - სისტემაში შესაძლებელია ნებისმიერი ტიპის როლის დამატება და მისთვის შესაბამისი უფლებებისა და შეზღუდვების მინიჭება',
          'Digitarius will fully adapt to the structure of your organization - any type of role can be added to the system and appropriate rights and restrictions can be assigned to it',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/law.png',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
