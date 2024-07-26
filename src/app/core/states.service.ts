import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  btnIndex: number = 0;
  isOpenDialog: any = new BehaviorSubject<any>(false);
  isOpen$: any = this.isOpenDialog.asObservable();

  isOpenTermsPopup: any = new BehaviorSubject<any>(false);
  isOpenTerms$: any = this.isOpenTermsPopup.asObservable();

  constructor() {}
}
