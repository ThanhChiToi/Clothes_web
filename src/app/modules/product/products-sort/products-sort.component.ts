import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  primaryImg: string;
  hoverImg: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-products-sort',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-sort.component.html',
  styleUrl: './products-sort.component.scss'
})
export class ProductsSortComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Áo Polo Nam Marvel Spider-Man Edition',
      price: 1200000,
      originalPrice: 1500000,
      primaryImg: 'https://picsum.photos/seed/picsum/200/300',
      hoverImg: 'https://picsum.photos/200/300/?blur',
      isNew: true
    },
    {
      id: 2,
      name: 'Áo Sơ Mi Cotton Premium Uniqlo Style',
      price: 890000,
      primaryImg: 'https://picsum.photos/seed/picsum/200/300',
      hoverImg: 'https://picsum.photos/id/1062/600/800'
    },
    {
      id: 3,
      name: 'Áo Khoác Bomber Minimalist Urban',
      price: 2100000,
      originalPrice: 2450000,
      primaryImg: 'https://picsum.photos/seed/picsum/200/300',
      hoverImg: 'https://picsum.photos/id/1069/600/800',
      isNew: true
    },
    {
      id: 4,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/seed/picsum/200/300',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    },
  ];
}
