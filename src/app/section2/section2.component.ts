import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CollapseLogo1Component } from '../iconComponents/collapse-logo1/collapse-logo1.component';
import { CollapseLogo2Component } from '../iconComponents/collapse-logo2/collapse-logo2.component';
import { CollapseLogo3Component } from '../iconComponents/collapse-logo3/collapse-logo3.component';
import { CollapseLogo4Component } from '../iconComponents/collapse-logo4/collapse-logo4.component';
import { CollapseLogo5Component } from '../iconComponents/collapse-logo5/collapse-logo5.component';
import { DataService } from '../core/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [
    MatExpansionModule,
    CollapseLogo1Component,
    CollapseLogo2Component,
    CollapseLogo3Component,
    CollapseLogo4Component,
    CollapseLogo5Component,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss',
})
export class Section2Component {
  readonly panelOpenState = signal(false);

  collapseImg: number = 0;
  changePic(i: number) {
    this.collapseImg = i;
  }

  collapseInfo: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.collapseInfo = this.dataService.getCollapseInfo();
  }
}
