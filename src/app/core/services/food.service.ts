import { Injectable } from '@angular/core';
import {CardData} from "../components/food-card/food-card.component";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodData(): CardData[]{
    return [
      {
        image: 'assets/images/bowl2-preview.png', name: 'Wonton', price: 90
      },
      {
        image: 'assets/images/bowl1-preview.png', name: 'Chow Mein', price: 90
      },
      {
        image: 'assets/images/bowl3-copy.png', name: 'Ma Po Tofu', price: 90
      }
    ];
  }
}
