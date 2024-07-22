import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  index = 1;
  changeLang: any = new BehaviorSubject<any>(0);
  langStatus$: any = this.changeLang.asObservable();

  langs: any = {
    lang: ['ქართული', 'English'],
    dialogTitle: [
      'გთხოვთ შეიყვანოთ თქვენი მონაცემი',
      'Please enter your details',
    ],
    dialogMail: ['მეილი', 'Mail'],
    dialogDesc: ['აღწერა', 'Description'],
    dialogBtn: ['გაუქმება', 'Cancel'],
    dialogBtn2: ['გაგზავნა', 'Send'],

    nav1: ['ლოჯისტიკა', 'Logistic'],
    nav2: ['გამოკითხვა', 'Survey'],
    nav3: ['ყუთები', 'Boxes'],
    nav4: ['ფასი', 'Pricing'],
    navSignIn: ['შესვლა', 'Sign In'],
    navPackets: ['პაკეტები', 'Packets'],

    title: [
      'გაამარტივე არქივის მართვის პროცესი',
      'Simplify the archive management process',
    ],
    titleSub: [
      'შექმენი და აკონტროლე დოკუმენტაციის დაარქივება',
      'Create and control documentation archiving',
    ],

    headerBtn1: ['სცადე უფასოდ', 'Try for Free'],
    requestRegistration: ['მოითხოვე რეგისტრაცია', 'Request registration'],
    boxCheck: ['ყუთების გადამოწმება', 'Check the boxes'],
    headerFooter: [
      'ობიექტების ტრანსპორტირების მართვის მობილურზე მორეგებული აპლიკაცია',
      'A mobile-friendly application for managing the transportation of objects',
    ],

    section1Title: [
      'ჩატარებული ინვენტარიზაციების სრული ისტორია',
      'Complete history of conducted inventories',
    ],

    sectionSubTitle1: ['აღწერა', 'Description'],

    section2Title: [
      'ყუთბის/პაკეტების და დოკუმენტების გამოთხოვა',
      'Request boxes/packages and documents',
    ],
    learnMore: ['გაიგე მეტი', 'Learn More'],

    section3Title1: ['სცადე შენ თვითონ', 'Try it yourself'],
    section3Title2: ['გადაამოწმე ყუთები ლოკალურად', 'Check the boxes locally'],
    section3InputTitle: ['შეიყვანე ელ.ფოსტა', 'Enter your Email'],
    section3SendBtn: ['გაგზავნა', 'Send'],

    section4Title: ['დოკუმენტაციის დაარქივება', 'Archiving of documentation'],

    section5Title: [
      'ისტორიები ჩვენი მომხმარებლებისგან',
      'Stories from our customers',
    ],

    section6Title: [
      'არქივის საწყობში ძიება:',
      'Search in the archive warehouse:',
    ],

    section6SubTitle: [
      'სცადე უფასოდ და განავითარე მოთხოვნილი ერთეულის ობიექტზე',
      'Try it for free and develop on the requested unit object',
    ],

    footerDesc1: ['მომს. პირობები', 'Terms of Service'],
    footerDesc2: ['კონფ. პოლიტიკა', 'Confidential politics'],
  };

  getStatisticInfo() {
    return [
      {
        title: ['აღწერა', 'Description'],
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

  constructor() {}
}
