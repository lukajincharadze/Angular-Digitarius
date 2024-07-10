import { Component } from '@angular/core';
import { ButtonComponent } from '../sharedComponents/button/button.component';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from '../sharedComponents/dynamic-content/dynamic-content.component';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [ButtonComponent, CommonModule, DynamicContentComponent],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss',
})
export class Section4Component {
  arr: any[] = ['გაყიდვები', 'შესყიდვები', 'HR', 'ფინანსები', 'ფრონტ ოფისი'];
  useCaseInfo: any[] = [];
  i: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.useCaseInfo = this.dataService.useCaseInfo();
  }

  eventHandler(index: any) {
    this.i = index;
  }
}
