import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogOverviewExampleDialogComponent,
  DialogData,
} from './dialog-overview-example-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(data: DialogData): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        // Handle the result if needed
        console.log(result);
      }
    });
  }
}
