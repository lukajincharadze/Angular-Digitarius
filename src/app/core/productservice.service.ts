import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProductsData() {
    return [
      {
        name: 'გიორგი ნოზაძე',
        profesion: 'პროექტების კორდინატორი',
        description:
          ' ,,Signify-ს სისტემაზე გადასვლით კომპანიის ყოველდღიურობიდან\
                გამოთავისუფლდა უდიდესი დრო და ენერგია. Signify-ს გუნდი თითოეულ\
                ჩვენ თხოვნას უდიდესი ყურადღებით უდგება, რაც პროდუქტის მუდმივი\
                განახლების და განვითარების საწინდარია."',
        image: '../../assets/img/profilepic1.webp',
        logo: '../../assets/img/profilelogo1.webp',
      },
      {
        name: 'ზვიად გუბელიძე',
        profesion: 'გენერალური დირექტორი',
        description:
          '"1 არქივი უკვე გამოვანთავისუფლეთ. მეორესაც დროთა განმავლობაში გავაუქმებთ.\
           თანამშრომლებიც ბედნიერები არიან,  რადგან "დღის დახურვას" 30-40 წუთის\
            ნაცვლად 10 წუთში ასრულებენ და სახლში დროულად მიდიან."',
        image: '../../assets/img/profilepic2.webp',
        logo: '../../assets/img/profilelogo2.webp',
      },
      {
        name: 'თეა რობაქიძე',
        profesion: 'ბიზნეს პროცესების მენეჯერი',
        description:
          ',,ჩვენ დავნერგეთ საცალო მომსახურების პროცესში Signify-ს ელექტრონული ხელმოწერა\
           ბანკის მომხარებელს სახლიდან ან ოფისიდან გაუსვლელად მარტივად, უსაფრთხოდ,\
            კომფორტულად შეუძლია ნებისმიერი მოწყობილობიდან მოაწეროს ხელი სასესხო დოკუმენტებს."',
        image: '../../assets/img/profilepic3.webp',
        logo: '../../assets/img/profilelogo3.webp',
      },
      {
        name: 'ბაკო ხუბარძანია',
        profesion: 'შესყიდვების გუნდის ლიდერი',
        description:
          ',,ჩვენი პარტნიორობის დასაწყისში, გვხდებოდა უფრო მეტი კომპანია, ვისაც არ ჰქონდა მზაობა, რომ\
           სველი ხელმოწერის გარეშე გაგვეფორმებინა ხელშეკრულება. ძალიან მოკლე დროში ყველა დარწმუნდა,\
            რომ ეს არის ერთ-ერთი ყველაში"',
        image: '../../assets/img/profilepic4.webp',
        logo: '../../assets/img/profilelogo4.webp',
      },
      {
        name: 'ნინი ჭიღლაძე',
        profesion: 'HR Administration',
        description:
          '“დღეს კომპანიაში ვიცით, რომ დოკუმენტაცია არის დაცული, თავმოყრილია საერთო პლატფორმაზე და \
          პროცესის ადმინისტრირებაც გაცილებით იოლია. აქვე აღვნიშნავ, რომ სიგნიფაის ჰყავს ერთ-ერთი ყველაზე\
            უკეთესი სერვისები შემოგვთავაზოს.”"',
        image: '../../assets/img/profilepic5.webp',
        logo: '../../assets/img/profilelogo5.webp',
      },
      {
        name: 'ნინი ერგემლიძე',
        profesion: 'ადამიანური რესურსების მართვა',
        description:
          '”Signify-ს დახმარებით თვეში 100-ზე მეტ დოკუმენტზე ხდება ხელმოწერა. აგვისტოს თვეში გავაფორმეთ\
           შრომითი ხელშეკრულებები 150-მდე თანამშრომელთან და საათზე ნაკლებ დროში ორივე მხრიდან \
           ხელმოწერილი დოკუმენტი მზად მქონდა, ""',
        image: '../../assets/img/profilepic6.webp',
        logo: '../../assets/img/profilelogo6.webp',
      },
      {
        name: 'ეკა მჭედლიშვილი',
        profesion: 'HR დეპარტანმენტი ხელმ.',
        description:
          '"Signify-ს საშუალებით კომპანიაში შესაძლებელი გახდა, როგორც შიდა დეპარტამენტებს, ასევე გარე \
          კომპანიებს შორის დოკუმენტების სრულად გაციფრულება. შედეგად დაჩქარდა პროცესები, გაადვილდა\
           კომუნიკაცია, დაიზოგა ადამიანური რესურსი და დრო.""',
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
