import {Component, Input} from '@angular/core';


export interface CardData{
  image: string;
  name: string;
  price: number;
}
  @Component({
    selector: 'app-food-card',
    templateUrl: './food-card.component.html',
    styleUrls: ['./food-card.component.css']
  })
  export class FoodCardComponent {

  @Input()
  data!: CardData;

}
