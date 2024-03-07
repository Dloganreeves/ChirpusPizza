import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuItem} from './models/menu-item'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Churpus Pizza';

menu: MenuItem[] = [
  {
    name:"Cheese Pizza",
    category: "Pizza",
    price: 12,
    vegetarian: true,
    soldOut: false

  },
  {
    name:"Hot Honey Chicken Pizza",
    category: "Pizza",
    price: 14.50,
    vegetarian: false,
    soldOut: true
  },
  {
    name:"Bone-In Wings",
    category: "Wings",
    price: 13,
    vegetarian: false,
    soldOut: true
  },
    
  {
    name:"Cauliflower Wings",
    category: "Wings",
    price: 10,
    vegetarian: true,
    soldOut: false
  }
]

}




