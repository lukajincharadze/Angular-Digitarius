import { Component } from '@angular/core';
import { CardComponentComponent } from '../sharedComponents/card-component/card-component.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CardComponentComponent, CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss',
})
export class Section1Component {
  statInfo: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.statInfo = this.dataService.getStatisticInfo();
  }
}
