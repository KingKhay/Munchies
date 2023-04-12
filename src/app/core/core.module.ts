import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import { HeroComponent } from './components/hero/hero.component';
import {MaterialModule} from "../material/material.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
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
