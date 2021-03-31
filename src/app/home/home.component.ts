import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  array = [
    'assets/images/media6.jpg',
    'assets/images/media2.png',
    'assets/images/media3.jpg',
    'assets/images/media5.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
