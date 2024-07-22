import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProductsData() {
    return [
      {
        name: ['გიორგი ნოზაძე', 'George Nozadze'],
        profesion: ['პროექტების კორდინატორი', 'Project Coordinator'],
        description: [
          'არქივის შეფუთვის სერვისი განსაკუთრებულია. დოკუმენტების პაკეტებში რეგისტრაცია, შტრიხკოდებით მონიშვნა და ტრანსპორტირებისთვის მომზადება უპრობლემო და ეფექტურია. ნამდვილად და სამაგალითოდ რეკომენდებული სერვისი!',
          'Archive packaging service is exceptional. Registering documents in packages, marking them with barcodes and preparing them for transportation is hassle-free and efficient. Truly and exemplary recommended service!',
        ],
        image: '../../assets/img/profilepic1.webp',
        logo: '../../assets/img/profilelogo1.webp',
      },
      {
        name: ['ზვიად გუბელიძე', 'Zviad Gubelidze'],
        profesion: ['გენერალური დირექტორი', 'General Director'],
        description: [
          'არქივში აღების მოთხოვნის რეგისტრაციის პროცესი წარმოუდგენლად მოსახერხებელია. მოთხოვნების წამოწყება და პასუხისმგებელი პირებისთვის მათი გადაგზავნა არასოდეს ყოფილა ადვილი. შესანიშნავი მომსახურება!',
          'The process of registering a request to be archived is incredibly convenient. Its never been easier to initiate requests and send them to the people responsible. Excellent service!',
        ],
        image: '../../assets/img/profilepic2.webp',
        logo: '../../assets/img/profilelogo2.webp',
      },
      {
        name: ['თეა რობაქიძე', 'Tea Robakhidze'],
        profesion: ['ბიზნეს პროცესების მენეჯერი', 'Business Process Manager'],
        description: [
          'არქივის ლოგისტიკური ფუნქცია არის თამაშის შეცვლა. მობილურისთვის მზა ფუნქციონალობა შემომავალი ამოცანების მართვისთვის ჩვენს მუშაობას ბევრად უფრო ეფექტურს ხდის. მე მიყვარს გამოყენების სიმარტივე, ადდვილებს ყველაფერს!',
          'The logistics function of the archive is a game changer. Mobile-ready functionality for managing incoming tasks makes our work much more efficient. I love the ease of use, makes everything so easy!',
        ],
        image: '../../assets/img/profilepic3.webp',
        logo: '../../assets/img/profilelogo3.webp',
      },
      {
        name: ['ბაკო ხუბარძანია', 'Tako Khubardzania'],
        profesion: ['შესყიდვების გუნდის ლიდერი', 'Purchasing Team Leader'],
        description: [
          'არქივში დოკუმენტების მიღება არქივის სისტემით ძალიან მარტივია. შემოსული ყუთების აღრიცხვა მარტივი და ზუსტია. ამ სერვისით უფრო კმაყოფილი არ შეიძლება, ვუწევ დიდძალი რეკომენდაციას ჩემგან!',
          "Receiving documents in the archive is very easy with the archive system. Inbox accounting is simple and accurate. Couldn't be more satisfied with this service, I highly recommend it!",
        ],
        image: '../../assets/img/profilepic4.webp',
        logo: '../../assets/img/profilelogo4.webp',
      },
      {
        name: ['ნინი ჭიღლაძე', 'Nini Chikhladze'],
        profesion: ['HR ადმინისტრაცია', 'HR Administration'],
        description: [
          'Check Deficiency ფუნქცია Archive-ში ფანტასტიკურია. ის საშუალებას გვაძლევს შევამოწმოთ და დავამუშავოთ დეფიციტური შემომავალი ერთეულები, მოვამზადოთ ისინი შესანახად ყოველგვარი პრობლემების გარეშე. შესანიშნავი ფუნქცია!',
          'The Check Deficiency feature in Archive is fantastic. It allows us to check and process deficient incoming units, preparing them for storage without any problems. Great feature!',
        ],
        image: '../../assets/img/profilepic5.webp',
        logo: '../../assets/img/profilelogo5.webp',
      },
      {
        name: ['ნინი ერგემლიძე', 'Nini Ergemlidze'],
        profesion: [
          'ადამიანური რესურსების მართვა',
          'Management of human resources',
        ],
        description: [
          'არქივის სასაწყობო სერვისი არის უმაღლესი დონის. საარქივო საწყობში ყუთების განთავსება და აღრიცხვა ხდება სიზუსტით და ეფექტურობით. მომსახურებით დიდძალი კმაყოფილი, ვურჩევ ყველას რომ ცადოს არქივის შესაძლებლობები!',
          'The archive storage service is of the highest level. Placement and accounting of boxes in the archival warehouse is done with accuracy and efficiency. Very satisfied with the service, I recommend everyone to try the possibilities of the archive!',
        ],
        image: '../../assets/img/profilepic6.webp',
        logo: '../../assets/img/profilelogo6.webp',
      },
      {
        name: ['ეკა მჭედლიშვილი', 'Eka Mchedlishvili'],
        profesion: ['HR დეპარტანმენტი ხელმ.', 'Head of HR department'],
        description: [
          'Archive-ის მიერ პერიფერიული მოწყობილობების მხარდაჭერა შთამბეჭდავია. USB და მობილური კამერის სკანერების გამოყენება დოკუმენტების რეგისტრაციისა და მარკირებისთვის პროცესს გლუვს და სწრაფს ხდის. შესანიშნავი საქმეა!',
          "Archive's peripheral support is impressive. Using USB and mobile camera scanners to register and mark documents makes the process smooth and fast. Great job!",
        ],
        image: '../../assets/img/profilepic7.webp',
        logo: '../../assets/img/profilelogo7.webp',
      },
    ];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
