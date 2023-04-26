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
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MenuSearchComponent } from './components/menu/menu-search/menu-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MenuTagComponent } from './components/menu/menu-tag/menu-tag.component';
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';

const components = [
  HeaderComponent,
  HeroComponent,
  FoodCardComponent,
  ErrorComponent,
  MenuComponent,
  MenuCardComponent,
  MenuSearchComponent,
  MenuTagComponent,
  LoginComponent,
  BlogComponent,
];

@NgModule({
  declarations: [
    components,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    MaterialModule,
    HttpClientModule,
    RatingModule,
    MatProgressSpinnerModule,
    FormsModule,
    ToastrModule,
    ReactiveFormsModule,
  ],
  exports: [
    components
  ]
})
export class CoreModule {
}
