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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  readonly panelOpenState = signal(false);
  collapseImg: number = 0;
  collapseInfo: any[] = [];

  readonly mail = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.collapseInfo = this.dataService.getCollapseInfo();
  }

  changePic(i: number) {
    this.collapseImg = i;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name(), mail: this.mail() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.mail.set(result);
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <mat-dialog-content class="dialog">
      <p class="dialog-title">გთხოვთ შეიყვანოთ თქვენი მონაცემები</p>
      <div class="dialog-wrapper">
        <mat-form-field>
          <mat-label>სახელი</mat-label>
          <input matInput [(ngModel)]="name" />
        </mat-form-field>
        <mat-form-field>
          <mat-label>ელფოსტა</mat-label>
          <input matInput [(ngModel)]="mail" />
        </mat-form-field>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions class="dialog-btnWrapper">
      <button (click)="onNoClick()" class="dialog-btnWrapper-button">
        გაუქმება
      </button>
      <button
        [mat-dialog-close]="mail()"
        class="dialog-btnWrapper-button"
        cdkFocusInitial
      >
        გაგზავნა
      </button>
    </mat-dialog-actions>
  `,
  styleUrl: './section2.component.scss',

  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly mail = model(this.data.mail);
  readonly name = model(this.data.mail);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  mail: string;
  name: string;
}
