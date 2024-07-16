import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  btnIndex: number = 0;
  isOpenDialog: any = new BehaviorSubject<any>(false);
  isOpen$: any = this.isOpenDialog.asObservable();
  constructor() {}
}
