import { Injectable } from '@angular/core';
import {CardData} from "../components/food-card/food-card.component";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  data: CardData[] = [];
  getFoodData(): CardData[]{
    this.data.push({image: 'assets/images/bowl2-preview.png', name: 'Wonton', price: 90});
    this.data.push({image: 'assets/images/bowl1-preview.png', name: 'Chow Mein', price: 90});
    this.data.push({image: 'assets/images/bowl3-copy.png', name: 'Ma Po Tofu', price: 90});

    return this.data;
  }
}
