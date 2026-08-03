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
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  bannerTitle = 'Bộ Sưu Tập Thu Đông 2026';
  bannerSubtitle = 'Khám phá các phong cách thời trang hiện đại & tinh tế';

  // Danh sách sản phẩm mẫu
  products: Product[] = [
    {
      id: 1,
      name: 'Áo Polo Nam Marvel Spider-Man Edition',
      price: 1200000,
      originalPrice: 1500000,
      primaryImg: 'https://picsum.photos/id/1005/600/800',
      hoverImg: 'https://picsum.photos/id/1025/600/800',
      isNew: true
    },
    {
      id: 2,
      name: 'Áo Sơ Mi Cotton Premium Uniqlo Style',
      price: 890000,
      primaryImg: 'https://picsum.photos/id/1059/600/800',
      hoverImg: 'https://picsum.photos/id/1062/600/800'
    },
    {
      id: 3,
      name: 'Áo Khoác Bomber Minimalist Urban',
      price: 2100000,
      originalPrice: 2450000,
      primaryImg: 'https://picsum.photos/id/1074/600/800',
      hoverImg: 'https://picsum.photos/id/1069/600/800',
      isNew: true
    },
    {
      id: 4,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/id/103/600/800',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    },
    {
      id: 5,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/id/103/600/800',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    },
    {
      id: 6,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/id/103/600/800',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    },
    {
      id: 7,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/id/103/600/800',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    },
    {
      id: 8,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/id/103/600/800',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    },
    {
      id: 9,
      name: 'Quần Jeans Slim-Fit Classic Blue',
      price: 950000,
      primaryImg: 'https://picsum.photos/id/103/600/800',
      hoverImg: 'https://picsum.photos/id/106/600/800'
    }
  ];

}
