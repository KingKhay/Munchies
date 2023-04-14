import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../../../shared/models/Food";

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  @Input()
  food: Food = {id: '1', name: '', price: 2,stars: 5, imageUrl:'assets/images/menu1.jpg',tags:['FastFood'],cookTime: '',favorite: true};

  ngOnInit(): void {
  }


}
