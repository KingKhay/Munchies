import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../services/food.service";
import {Food} from "../../../shared/models/Food";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foodData: Food[] = [];

  isLoading = true;

  constructor(private foodService: FoodService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private route: ActivatedRoute) {
    this.matIconRegistry.addSvgIcon('spinner', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/spinner.svg'));

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('searchTerm')) {
        this.foodData =
          this.foodService.getMenuOfFood()
            .filter(food => food.name.toLowerCase()
              .includes(params.get('searchTerm')!.toLowerCase()));
      }
      else{
        this.foodData = this.foodService.getMenuOfFood()
      }
      this.isLoading = false;
    })
  }

}
