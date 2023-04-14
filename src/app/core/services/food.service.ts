import { Injectable } from '@angular/core';
import {CardData} from "../components/food-card/food-card.component";
import {Food} from "../../shared/models/Food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getMenuOfFood(): Food[]{
    return [
      {
        id: 'be26ec86-8435-4e17-93b4-6f9b24c3538a',
        name: 'Congee',
        price: 34,
        tags: ['Veggies','FastFood'],
        favorite: true,
        cookTime: '10 mins',
        imageUrl: 'assets/images/menu1.jpg',
        stars: 4
      },
      {
        id: '90ef6b2c-3064-49d2-a666-c393ab7658e1',
        name: 'Kung Pao',
        price: 37,
        tags: ['Veggies','FastFood'],
        favorite: false,
        cookTime: '10 mins',
        imageUrl: 'assets/images/menu2.jpg',
        stars: 3
      },
      {
        id: '96a35155-4509-4762-a2d5-aef7c8d36a62',
        name: 'Mi Xian',
        price: 25,
        tags: ['Noodles','FastFood'],
        favorite: true,
        cookTime: '15 mins',
        imageUrl: 'assets/images/menu3.jpg',
        stars: 4
      },
      {
        id: 'bdd28129-c289-445f-a052-9e106c424252',
        name: 'He Fen',
        price: 27,
        tags: ['Noodles','FastFood'],
        favorite: true,
        cookTime: '15 mins',
        imageUrl: 'assets/images/menu4.jpg',
        stars: 4
      },
      {
        id: 'bdd28129-c289-445f-a052-9e106c424252',
        name: 'La Mian',
        price: 42,
        tags: ['Noodles','SlowFood'],
        favorite: true,
        cookTime: '25 mins',
        imageUrl: 'assets/images/menu5.jpg',
        stars: 4
      },
      {
        id: 'ab99f8e5-1e99-4a02-9c27-7e023ab1caa7',
        name: 'Mi Sua',
        price: 20,
        tags: ['Noodles','SlowFood'],
        favorite: false,
        cookTime: '25 mins',
        imageUrl: 'assets/images/menu6.jpg',
        stars: 3
      },
      {
        id: '84bbded0-d9f7-43ad-b2ff-6fa9611a8ff1',
        name: 'Yin Zhen Fen',
        price: 23,
        tags: ['Veggies','FastFood'],
        favorite: true,
        cookTime: '10 mins',
        imageUrl: 'assets/images/menu7.jpg',
        stars: 2
      },
      {
        id: '98edfe4e-a47b-4781-b98e-4fd1de6aa5e8',
        name: 'Burger Delight',
        price: 18,
        tags: ['Fries','FastFood','Burger'],
        favorite: false,
        cookTime: '10 mins',
        imageUrl: 'assets/images/menu8.jpg',
        stars: 5
      },
      {
        id: '4e7c98d0-ba2d-41b8-bf66-18a4528e0347',
        name: 'Mini Smoothie',
        price: 7,
        tags: ['FastFood','Smoothie'],
        favorite: true,
        cookTime: '5 mins',
        imageUrl: 'assets/images/menu9.jpg',
        stars: 5
      },
      {
        id: '6c4028e1-d5a8-4a7c-a329-e9c1b2b349dd',
        name: 'Strawberry Smoothie',
        price: 9,
        tags: ['FastFood','Smoothie'],
        favorite: false,
        cookTime: '5 mins',
        imageUrl: 'assets/images/menu10.jpg',
        stars: 5
      },
      {
        id: '4b3ca7cc-5500-4cb1-a787-bf1d59bcf442',
        name: 'Grape Smoothie',
        price: 8,
        tags: ['FastFood','Smoothie'],
        favorite: false,
        cookTime: '5 mins',
        imageUrl: 'assets/images/menu11.jpg',
        stars: 4
      },
      {
        id: '5e112947-9420-46fe-a64d-8c6826a00bec',
        name: 'Mega Burger',
        price: 21,
        tags: ['FastFood','Burger'],
        favorite: true,
        cookTime: '10 mins',
        imageUrl: 'assets/images/menu12.jpg',
        stars: 5
      },
      {
        id: '7d95fbf1-172c-4ad6-bfd0-dce4faa69990',
        name: 'Cheese Burger',
        price: 20,
        tags: ['FastFood','Burger', 'Fries'],
        favorite: true,
        cookTime: '15 mins',
        imageUrl: 'assets/images/menu13.jpg',
        stars: 4
      },
      {
        id: '7d95fbf1-172c-4ad6-bfd0-dce4faa69990',
        name: 'Jumbo Burger',
        price: 24,
        tags: ['FastFood','Burger','Fries'],
        favorite: false,
        cookTime: '15 mins',
        imageUrl: 'assets/images/menu14.jpg',
        stars: 5
      },
    ];
  }

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
