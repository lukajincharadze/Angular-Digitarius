import { Component } from '@angular/core';
import { Section3LogoComponent } from '../iconComponents/section3-logo/section3-logo.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [Section3LogoComponent, FormsModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss',
})
export class Section3Component {
  foo: string = '';

  constructor(private dataService: DataService) {}

  request() {
    let data = { userMail: this.foo };
    console.log(this.foo);
    this.dataService.sendData('http://127.0.0.1:5000/mail', data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
