import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from "./core/components/hero/hero.component";
import {ErrorComponent} from "./core/components/error/error.component";
import {MenuComponent} from "./core/components/menu/menu.component";
import {LoginComponent} from "./core/components/login/login.component";

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'search', component: MenuComponent},
  {path: 'search/:searchTerm', component: MenuComponent},
  {path: 'tag', component: MenuComponent},
  {path: 'tag/:tagName', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
