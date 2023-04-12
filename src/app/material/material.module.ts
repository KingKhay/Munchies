import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";

const components = [MatIconModule, MatBadgeModule];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    components,
  ],
  exports: [components]
})
export class MaterialModule {
}
