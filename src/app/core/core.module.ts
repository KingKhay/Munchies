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


@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    FoodCardComponent,
    ErrorComponent,
    MenuComponent,
    MenuCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
  ]
})
export class CoreModule {
}
