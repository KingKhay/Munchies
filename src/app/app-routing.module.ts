import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from "./core/components/hero/hero.component";
import {ErrorComponent} from "./core/components/error/error.component";

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
