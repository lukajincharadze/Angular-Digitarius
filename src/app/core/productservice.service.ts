import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProductsData() {
    return [
      {
        name: 'გიორგი ნოზაძე',
        profesion: 'პროექტების კორდინატორი',
        description:
          '"არქივის შეფუთვის სერვისი განსაკუთრებულია. დოკუმენტების პაკეტებში რეგისტრაცია, შტრიხკოდებით მონიშვნა და ტრანსპორტირებისთვის მომზადება უპრობლემო და ეფექტურია. ნამდვილად და სამაგალითოდ რეკომენდებული სერვისი!"',
        image: '../../assets/img/profilepic1.webp',
        logo: '../../assets/img/profilelogo1.webp',
      },
      {
        name: 'ზვიად გუბელიძე',
        profesion: 'გენერალური დირექტორი',
        description:
          '"არქივში აღების მოთხოვნის რეგისტრაციის პროცესი წარმოუდგენლად მოსახერხებელია. მოთხოვნების წამოწყება და პასუხისმგებელი პირებისთვის მათი გადაგზავნა არასოდეს ყოფილა ადვილი. შესანიშნავი მომსახურება!"',
        image: '../../assets/img/profilepic2.webp',
        logo: '../../assets/img/profilelogo2.webp',
      },
      {
        name: 'თეა რობაქიძე',
        profesion: 'ბიზნეს პროცესების მენეჯერი',
        description:
          '"არქივის ლოგისტიკური ფუნქცია არის თამაშის შეცვლა. მობილურისთვის მზა ფუნქციონალობა შემომავალი ამოცანების მართვისთვის ჩვენს მუშაობას ბევრად უფრო ეფექტურს ხდის. მე მიყვარს გამოყენების სიმარტივე, ადდვილებს ყველაფერს!"',
        image: '../../assets/img/profilepic3.webp',
        logo: '../../assets/img/profilelogo3.webp',
      },
      {
        name: 'ბაკო ხუბარძანია',
        profesion: 'შესყიდვების გუნდის ლიდერი',
        description:
          '"არქივში დოკუმენტების მიღება არქივის სისტემით ძალიან მარტივია. შემოსული ყუთების აღრიცხვა მარტივი და ზუსტია. ამ სერვისით უფრო კმაყოფილი არ შეიძლება, ვუწევ დიდძალი რეკომენდაციას ჩემგან!"',
        image: '../../assets/img/profilepic4.webp',
        logo: '../../assets/img/profilelogo4.webp',
      },
      {
        name: 'ნინი ჭიღლაძე',
        profesion: 'HR Administration',
        description:
          '"Check Deficiency ფუნქცია Archive-ში ფანტასტიკურია. ის საშუალებას გვაძლევს შევამოწმოთ და დავამუშავოთ დეფიციტური შემომავალი ერთეულები, მოვამზადოთ ისინი შესანახად ყოველგვარი პრობლემების გარეშე. შესანიშნავი ფუნქცია!"',
        image: '../../assets/img/profilepic5.webp',
        logo: '../../assets/img/profilelogo5.webp',
      },
      {
        name: 'ნინი ერგემლიძე',
        profesion: 'ადამიანური რესურსების მართვა',
        description:
          '"არქივის სასაწყობო სერვისი არის უმაღლესი დონის. საარქივო საწყობში ყუთების განთავსება და აღრიცხვა ხდება სიზუსტით და ეფექტურობით. მომსახურებით დიდძალი კმაყოფილი, ვურჩევ ყველას რომ ცადოს არქივის შესაძლებლობები!"',
        image: '../../assets/img/profilepic6.webp',
        logo: '../../assets/img/profilelogo6.webp',
      },
      {
        name: 'ეკა მჭედლიშვილი',
        profesion: 'HR დეპარტანმენტი ხელმ.',
        description:
          '"Archive-ის მიერ პერიფერიული მოწყობილობების მხარდაჭერა შთამბეჭდავია. USB და მობილური კამერის სკანერების გამოყენება დოკუმენტების რეგისტრაციისა და მარკირებისთვის პროცესს გლუვს და სწრაფს ხდის. შესანიშნავი საქმეა!"',
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
