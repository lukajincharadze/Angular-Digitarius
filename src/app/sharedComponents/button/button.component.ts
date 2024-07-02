import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { StatesService } from '../../core/states.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() changeData: EventEmitter<any> = new EventEmitter();
  @Input() index: number = 0;
  // @Input() foo: number = 0;

  changeColor: string = 'background-color: #fff';

  constructor(
    private changeDetector: ChangeDetectorRef,
    private states: StatesService
  ) {}

  // ngOninit() {
  //   this.changeColor =
  //     this.index == this.foo
  //       ? 'background-color: #6c6efb'
  //       : 'background-color: #fff';
  // }

  click() {
    this.changeData.emit(this.index);
    // this.changeColor =
    //   this.index == this.states.btnIndex
    //     ? 'background-color: #6c6efb'
    //     : 'background-color: #fff';

    // this.changeDetector.detectChanges();
  }
}
