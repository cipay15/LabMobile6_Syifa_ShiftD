import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Our Flowers', url: '/my-project', icon: 'briefcase' },
    { title: 'Flowers Bloom', url: '/about-me', icon: 'person' },
  ];
  constructor() {}
}