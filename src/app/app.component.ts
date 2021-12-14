import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'pippo';
  size = 10;
  karlActive: boolean = true;
  currentClass: 'green' | 'red' = 'green';
  constructor(private translate: TranslateService) {}

  toggleClass() {
    this.currentClass === 'green' ? (this.currentClass = 'red') : (this.currentClass = 'green');
  }




  links = ['/karl', '/matt', '/temp', '/morra', '/tris', '/songs'];

  public ngOnInit(): void {
    this.setDefaultTranslation();
  }

  private setDefaultTranslation(): void {
    console.log('this.translate.getBrowserLang():', this.translate.getBrowserLang());
    if (['en', 'it'].indexOf(this.translate.getBrowserLang()!) > -1) {
      this.translate.setDefaultLang(this.translate.getBrowserLang()!);
    } else {
      this.translate.setDefaultLang('it');
    }
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  random() {
    return Math.random();
  }

  toggleKarl() {
    this.karlActive = !this.karlActive;
  }
}
