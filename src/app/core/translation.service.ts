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
    nav2: ['გამოკითვა', 'Survey'],
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

  constructor() {}
}
