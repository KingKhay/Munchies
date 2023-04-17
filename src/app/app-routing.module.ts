import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from "./core/components/hero/hero.component";
import {ErrorComponent} from "./core/components/error/error.component";
import {MenuComponent} from "./core/components/menu/menu.component";
import {LoginComponent} from "./core/components/login/login.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent, canActivate:[AuthGuard]},
  {path: 'search', component: MenuComponent, canActivate:[AuthGuard]},
  {path: 'search/:searchTerm', component: MenuComponent, canActivate:[AuthGuard]},
  {path: 'tag', component: MenuComponent, canActivate:[AuthGuard]},
  {path: 'tag/:tagName', component: MenuComponent, canActivate:[AuthGuard]},
  {path: '**', component: ErrorComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
