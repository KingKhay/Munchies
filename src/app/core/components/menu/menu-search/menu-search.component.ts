import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent {

  constructor(private router: Router) {
  }

  searchTerm = '';


  search() {
    if (this.searchTerm.trim() === ''){
      this.router.navigateByUrl('/menu')
    }
    this.router.navigateByUrl(`/search/${this.searchTerm}`);
    this.searchTerm = '';
  }
}
