import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  index = 0;
  changeLang: any = new BehaviorSubject<any>(0);
  langStatus$: any = this.changeLang.asObservable();

  langs: any = {
    lang: ['ქართული', 'English'],
    dialogTitle: [
      'გთხოვთ შეიყვანოთ თქვენი მონაცემი',
      'Please enter your details',
    ],

    dialogMail: ['მეილი', 'Mail'],
    dialogName: ['სახელი', 'Name'],
    dialogLastname: ['გვარი', 'Last name'],
    dialogCompany: ['კომპანია', 'Company'],
    dialogPhoneNum: ['ტელეფონის ნომერი', 'Phone Number'],
    dialogDesc: ['აღწერა', 'Description'],
    dialogBtn: ['გაუქმება', 'Cancel'],
    dialogBtn2: ['გაგზავნა', 'Send'],

    nav1: ['დაარქივება', 'Archiving'],
    nav2: ['პაკეტები', 'Packages'],
    nav3: ['ლოჯისტიკა', 'Logistics'],
    nav4: ['ფასი', 'Pricing'],
    navSignIn: ['შესვლა', 'Sign In'],
    navPackets: ['მოითხოვე პრეზენტაცია', 'Request a presentation'],

    title: ['არქივის მართვის პროგრამა', 'Archive management program'],
    titleSub: [
      'მართე დოკუმეტების არქივი და ლოჯისტიკა ერთი პროგრამით',
      'Manage document archive and logistics with one program',
    ],

    headerBtn1: ['სცადე უფასოდ', 'Try for Free'],
    requestRegistration: ['მოითხოვე რეგისტრაცია', 'Request registration'],
    boxCheck: [
      'ქაღალდის დოკუმენტების აღწერა & ორგანიზება',
      'Description & organization of paper documents',
    ],
    headerFooter: [
      'წინასწარ მინიჭებული ყუთის ნომრის მიღებისთანავე, დოკუმენტები მზადაა არქივში გადასატანად - გადაეცემა კურიერს.',
      'Upon receipt of the pre-assigned box number, the documents are ready to be transferred to the archive - handed over to the courier.',
    ],

    section1Title: [
      'თუ გაქვთ ქაღალდის დოკუმენტების არქივი და გაწუხებთ:',
      'If you have an archive of paper documents and are concerned about:',
    ],

    sectionSubTitle1: ['აღწერა', 'Description'],

    section2Title: [
      'არქივარიუსი დაგეხმარებათ, რომ:',
      'Archivarius will help you to:',
    ],
    learnMore: ['გაიგე მეტი', 'Learn More'],

    section3Title1: ['მონაცემთა სერვისების ექსპორტი', 'Export Data Services'],
    section3Title2: [
      'მოითხოვე სერვისების მართვა',
      'Request Archiving Services',
    ],
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

    footerDialogTitle: ['მომსახურების პირობები', 'Terms of Service'],
  };

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

  footerDialogInfo() {
    return [
      {
        title: ['შესავალი', '1. Introduction'],
        desc: [
          'კეთილი იყოს თქვენი მობრძანება არქივში, UGT-ის მიერ მოწოდებულ პროგრამულ გადაწყვეტაში, რომელიც ეხმარება კომპანიებს დოკუმენტების მართვაში და დაარქივებაში. არქივის გამოყენებით, თქვენ ეთანხმებით, რომ დაიცვან შემდეგი წესები და პირობები.',
          'Welcome to Archive, a software solution provided by UGT that helps companies manage and archive documents. By using Archive, you agree to comply with and be bound by the following terms and conditions.',
        ],
      },
      {
        title: ['2. განმარტებები', '2. Definitions'],
        desc: [
          "პროგრამული უზრუნველყოფა ეხება არქივის პროგრამულ უზრუნველყოფას. 'პროვაიდერი' იგულისხმება UGT-ზე. 'მომხმარებელი' ეხება ინდივიდს ან კომპანიას, რომელიც იყენებს პროგრამულ უზრუნველყოფას. 'დოკუმენტები' ეხება ნებისმიერ ფაილს ან მონაცემს, რომელიც ატვირთული, მართვადი ან დაარქივებულია პროგრამული უზრუნველყოფის გამოყენებით.",
          "'Software' refers to the Archive software. 'Provider' refers to UGT. 'User' refers to the individual or company using the Software. 'Documents' refers to any files or data uploaded, managed, or archived using the Software.",
        ],
      },
      {
        title: ['3. პროგრამული უზრუნველყოფის გამოყენება', '3. Use of Software'],
        desc: [
          "მომხმარებლებმა უნდა გაიარონ რეგისტრაცია ანგარიშის შესაქმნელად პროგრამის გამოყენებისთვის. მომხმარებლები თანხმდებიან გამოიყენონ პროგრამული უზრუნველყოფა მხოლოდ ლეგიტიმური მიზნებისთვის. პროგრამული უზრუნველყოფა მიეწოდება 'როგორც არის', და პროვაიდერი არ იძლევა გარანტიას მისი შესრულების ან კონკრეტული მიზნის შესაბამისობის შესახებ.",
          "Users must register for an account to use the Software. Users agree to use the Software only for lawful purposes. The Software is provided 'as is,' and the Provider makes no guarantees regarding its performance or suitability for any particular purpose.",
        ],
      },
      {
        title: [
          '4. მომხმარებლის პასუხისმგებლობები',
          '4. User Responsibilities',
        ],
        desc: [
          'მომხმარებლები ვალდებულნი არიან შეინახონ მათი ანგარიშის ინფორმაცია კონფიდენციალურად. მომხმარებლები ვალდებულნი არიან დარწმუნდნენ, რომ ყველა დოკუმენტი ატვირთული პროგრამული უზრუნველყოფით არ არღვევს რაიმე კანონებს ან მესამე მხარის უფლებებს. მომხმარებლები ვალდებულნი არიან დარწმუნდნენ, რომ ყველა დოკუმენტი ატვირთული პროგრამული უზრუნველყოფით არ არღვევს რაიმე კანონებს ან მესამე მხარის უფლებებს.',
          'Users are responsible for maintaining the confidentiality of their account information. Users must ensure that all Documents uploaded to the Software do not violate any laws or third-party rights. Users are responsible for the accuracy and legality of the Documents they manage using the Software.',
        ],
      },
      {
        title: ['5. მონაცემთა უსაფრთხოება', '5. Data Security'],
        desc: [
          'პროვაიდერი ახორციელებს გონივრულ უსაფრთხოების ზომებს მომხმარებლის მონაცემების დასაცავად. თუმცა, პროვაიდერი ვერ გარანტირებს აბსოლუტურ უსაფრთხოებას და არ არის პასუხისმგებელი რაიმე მონაცემთა გარღვევებზე ან არასანქცირებულ წვდომაზე.',
          'The Provider implements reasonable security measures to protect User data. However, the Provider cannot guarantee absolute security and is not liable for any data breaches or unauthorized access.',
        ],
      },
      {
        title: ['6. ინტელექტუალური საკუთრება', '6. Intellectual Property'],
        desc: [
          'პროგრამული უზრუნველყოფა და ყველა ასოცირებული ინტელექტუალური საკუთრების უფლებები პროვაიდერის საკუთრებაა. მომხმარებლებს მიეცემათ შეზღუდული, არა-ექსკლუზიური, არაგადამტანელი ლიცენზია პროგრამული უზრუნველყოფის გამოყენების მიზნით ამ პირობების შესაბამისად.',
          'The Software and all associated intellectual property rights are owned by the Provider. Users are granted a limited, non-exclusive, non-transferable license to use the Software in accordance with these terms and conditions.',
        ],
      },
      {
        title: ['7. გადასახადები და გადახდა', '7. Fees and Payment'],
        desc: [
          'მომხმარებლებს შესაძლოა მოთხოვნილი იქნეს გადაიხადონ გამოწერის გადასახადები პროგრამული უზრუნველყოფის გარკვეული ფუნქციების ხელმისაწვდომობისთვის. ყველა გადასახადი არ არის დასაბრუნებელი, თუ სხვა არ არის მითითებული.',
          'Users may be required to pay subscription fees to access certain features of the Software. All fees are non-refundable unless otherwise stated.',
        ],
      },
      {
        title: ['8. პასუხისმგებლობის შეზღუდვა', '8. Limitation of Liability'],
        desc: [
          'პროვაიდერი არ არის პასუხისმგებელი რაიმე არაპირდაპირი, შემთხვევითი ან განტოლებადი ზიანის ან ზარალისგან პროგრამული უზრუნველყოფის გამოყენებით ან ვერ გამოყენებით. პროვაიდერის საერთო პასუხისმგებლობა მომხმარებელთან დაკავშირებული ნებისმიერი პრეტენზიებისათვის შეზღუდულია მომხმარებლის მიერ პროგრამული უზრუნველყოფისთვის გადახდილი თანხის ოდენობით.',
          "The Provider is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Software. The Provider's total liability to the User for any claims related to the Software is limited to the amount paid by the User for the Software.",
        ],
      },
      {
        title: ['9. შეწყვეტა', '9. Termination'],
        desc: [
          'პროვაიდერი იტოვებს უფლებას შეწყვიტოს ან შეაჩეროს მომხმარებლის წვდომა პროგრამული უზრუნველყოფაზე ნებისმიერ დროს, წინასწარი შეტყობინების გარეშე, ამ პირობების დარღვევისათვის. მომხმარებლებს შეუძლიათ შეწყვიტონ პროგრამული უზრუნველყოფის გამოყენება ნებისმიერ დროს პროგრამული უზრუნველყოფის გამოყენების შეწყვეტით და მათი ანგარიშის წაშლით.',
          'The Provider reserves the right to terminate or suspend User access to the Software at any time, without notice, for any violation of these terms and conditions. Users may terminate their use of the Software at any time by ceasing to use the Software and deleting their account.',
        ],
      },
      {
        title: ['10. პირობების ცვლილებები', '10. Changes to Terms'],
        desc: [
          'პროვაიდერი შესაძლოა განაახლოს ეს პირობები დროდადრო. მომხმარებლები მიიღებენ შეტყობინებას ნებისმიერი ცვლილების შესახებ, და პროგრამული უზრუნველყოფის გამოყენების გაგრძელება ნიშნავს განახლებულ პირობების მიღებას.',
          'The Provider may update these terms and conditions from time to time. Users will be notified of any changes, and continued use of the Software constitutes acceptance of the updated terms.',
        ],
      },
      {
        title: ['11. სამართლებრივი მარეგულირებელი', '11. Governing Law'],
        desc: [
          'ეს პირობები რეგულირდება და განისაზღვრება [თქვენი იურისდიქციის] კანონების შესაბამისად, მიუხედავად მისი სამართლებრივი კონფლიქტის პრინციპების.',
          'These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of laws principles.',
        ],
      },
      {
        title: ['12. საკონტაქტო ინფორმაცია', '12. Contact Information'],
        desc: [
          'ნებისმიერი კითხვების ან შეშფოთებების შემთხვევაში ამ პირობებთან დაკავშირებით, გთხოვთ დაუკავშირდეთ UGT-ს [საკონტაქტო ინფორმაცია].',
          'For any questions or concerns regarding these terms and conditions, please contact UGT at [contact information].',
        ],
      },
    ];
  }

  constructor() {}
}
