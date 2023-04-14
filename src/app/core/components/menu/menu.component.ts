import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../services/food.service";
import {Food} from "../../../shared/models/Food";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foodData!: Food[];
  constructor(private foodService: FoodService) {

  }
  ngOnInit(): void {
    this.foodData = this.foodService.getMenuOfFood();
  }

}
