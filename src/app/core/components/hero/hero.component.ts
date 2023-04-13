import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {CardData} from "../food-card/food-card.component";
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements  OnInit{

  data!: CardData[];
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private foodService: FoodService) {

    this.data = [];

    this.iconRegistry.addSvgIcon(
      "facebook", this.sanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons8-facebook.svg"));
    this.iconRegistry.addSvgIcon(
      "instagram", this.sanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons8-instagram.svg"));
    this.iconRegistry.addSvgIcon(
      "whatsapp", this.sanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons8-whatsapp.svg"));

  }


  colors: string[] = ['lightgreen','golden-yellow','purple-blue'];
  ngOnInit(): void {
    this.data = this.foodService.getFoodData();
    console.log(this.data)
  }
}
