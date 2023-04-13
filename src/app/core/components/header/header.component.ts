import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  itemsInCart = 0;

  isSmallScreen = window.innerWidth <= 768;
  isLargeScreen = window.innerWidth >= 768;
  isMenuOpened = false;
  constructor() {
    //
  }
}
