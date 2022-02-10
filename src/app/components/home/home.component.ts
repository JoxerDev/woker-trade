import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nav2Items = [
    {name: 'fejlesztes', img: 'uszt120.png', link: 'fejlesztes'},
    {name: 'fejlesztes2', img: 'infoblokk_kedv_final_CMYK_ERFA.jpg', link: 'fejlesztes2'},
    {name: 'fejlesztes3', img: 'infoblokk_esza.png', link: 'fejlesztes3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
