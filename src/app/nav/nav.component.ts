import { Component, HostListener } from '@angular/core';
import { TranslationService } from '../core/translation.service';
import { DataService } from '../core/data.service';
import { StatesService } from '../core/states.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  text: string = 'Geo';
  langs: any = {};
  index: number = 0;
  isOverlayActive: boolean = false;

  constructor(
    private translationService: TranslationService,
    private dataService: DataService,
    private stateService: StatesService
  ) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  width = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = (event.target as Window).innerWidth;
    if (this.width >= 800) {
      this.isOverlayActive = false;
      this.stateService.isOpenDialog.next(this.isOverlayActive);
    }
  }

  gotoSection(frag: string) {
    document.getElementById(frag)?.scrollIntoView({ behavior: 'smooth' });
    this.isOverlayActive = false;
    this.stateService.isOpenDialog.next(this.isOverlayActive);
  }

  toggleOverlay() {
    this.isOverlayActive = !this.isOverlayActive;
    this.stateService.isOpenDialog.next(this.isOverlayActive);
  }
  changeText() {
    this.text = this.text === 'Geo' ? 'Eng' : 'Geo';
    this.translationService.index = this.translationService.index === 1 ? 0 : 1;
    this.dataService.index = this.dataService.index === 1 ? 0 : 1;
    this.index = this.translationService.index;
    this.translationService.changeLang.next(this.index);
    this.dataService.changeLang.next(this.index);
  }
}
