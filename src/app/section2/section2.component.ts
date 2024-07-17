import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  model,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CollapseLogo1Component } from '../iconComponents/collapse-logo1/collapse-logo1.component';
import { CollapseLogo2Component } from '../iconComponents/collapse-logo2/collapse-logo2.component';
import { CollapseLogo3Component } from '../iconComponents/collapse-logo3/collapse-logo3.component';
import { CollapseLogo4Component } from '../iconComponents/collapse-logo4/collapse-logo4.component';
import { CollapseLogo5Component } from '../iconComponents/collapse-logo5/collapse-logo5.component';
import { DataService } from '../core/data.service';
import { DialogComponent } from '../sharedComponents/dialog/dialog.component';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    CollapseLogo1Component,
    CollapseLogo2Component,
    CollapseLogo3Component,
    CollapseLogo4Component,
    CollapseLogo5Component,
    DialogComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  readonly panelOpenState = signal(false);
  collapseImg: number = 0;
  collapseInfo: any[] = [];
  dialogPopup: boolean = false;
  langs: any = {};
  index: number = 324213523;

  readonly mail = signal('');
  readonly dialog = inject(MatDialog);

  constructor(
    private dataService: DataService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.collapseInfo = this.dataService.getCollapseInfo();
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  changePic(i: number) {
    this.collapseImg = i;
  }

  toggleDialogPopup() {
    this.dialogPopup = !this.dialogPopup;
  }
}
