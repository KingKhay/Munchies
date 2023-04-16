import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-tag',
  templateUrl: './menu-tag.component.html',
  styleUrls: ['./menu-tag.component.css']
})
export class MenuTagComponent implements OnInit{

  tags: string[] = [];

  ngOnInit(): void {
   this.tags = ['All', 'Veggies','FastFood','Noodles','SlowFood','Fries','Burger','Smoothie'];
  }
}
