import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import { HeroComponent } from './components/hero/hero.component';
import {MaterialModule} from "../material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { FoodCardComponent } from './components/food-card/food-card.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCardComponent } from './components/menu/menu-card/menu-card.component';
import {RatingModule} from "ng-starrating";

const components = [
  HeaderComponent,
  HeroComponent,
  FoodCardComponent,
  ErrorComponent,
  MenuComponent,
  MenuCardComponent,
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    MaterialModule,
    HttpClientModule,
    RatingModule,
  ],
  exports: [
    components
  ]
})
export class CoreModule {
}
