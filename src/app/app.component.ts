import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Wóker Trade';
  storedLang: string = localStorage.getItem('lang')  as string;
  nav2Items = [
    {name: 'fejlesztes', img: 'uszt120.png', link: 'fejlesztes'},
    {name: 'fejlesztes2', img: 'infoblokk_kedv_final_CMYK_ERFA.jpg', link: 'fejlesztes2'},
    {name: 'fejlesztes3', img: 'infoblokk_esza.png', link: 'fejlesztes3'},
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {    
    //Set lang to stored value
    if (this.storedLang) {
      this.translate.use(this.storedLang);
    }
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
