import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.scss',
})
export class Section6Component {
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {}

  gotoSection(frag: string) {
    document.getElementById(frag)?.scrollIntoView();
  }

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }
}
