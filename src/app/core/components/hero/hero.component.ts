import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {

    this.iconRegistry.addSvgIcon(
      "facebook", this.sanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons8-facebook.svg"));
    this.iconRegistry.addSvgIcon(
      "instagram", this.sanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons8-instagram.svg"));
    this.iconRegistry.addSvgIcon(
      "whatsapp", this.sanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons8-whatsapp.svg"));

  }
}
