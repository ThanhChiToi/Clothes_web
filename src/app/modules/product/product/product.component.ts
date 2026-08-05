import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../shared/service/products.service';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  primaryImg: string;
  hoverImg: string;
  isNew?: boolean;
  mainImage : string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  bannerTitle = 'Bộ Sưu Tập Thu Đông 2026';
  bannerSubtitle = 'Khám phá các phong cách thời trang hiện đại & tinh tế';
  private productService = inject(ProductsService)
  // Danh sách sản phẩm mẫu
  products: Product[] = [
    // {
    //   id: 1,
    //   name: 'Áo Polo Nam Marvel Spider-Man Edition',
    //   price: 1200000,
    //   originalPrice: 1500000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/200/300/?blur',
    //   isNew: true
    // },
    // {
    //   id: 2,
    //   name: 'Áo Sơ Mi Cotton Premium Uniqlo Style',
    //   price: 890000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/1062/600/800'
    // },
    // {
    //   id: 3,
    //   name: 'Áo Khoác Bomber Minimalist Urban',
    //   price: 2100000,
    //   originalPrice: 2450000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/1069/600/800',
    //   isNew: true
    // },
    // {
    //   id: 4,
    //   name: 'Quần Jeans Slim-Fit Classic Blue',
    //   price: 950000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/106/600/800'
    // },
    // {
    //   id: 5,
    //   name: 'Quần Jeans Slim-Fit Classic Blue',
    //   price: 950000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/106/600/800'
    // },
    // {
    //   id: 6,
    //   name: 'Quần Jeans Slim-Fit Classic Blue',
    //   price: 950000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/106/600/800'
    // },
    // {
    //   id: 7,
    //   name: 'Quần Jeans Slim-Fit Classic Blue',
    //   price: 950000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/106/600/800'
    // },
    // {
    //   id: 8,
    //   name: 'Quần Jeans Slim-Fit Classic Blue',
    //   price: 950000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/106/600/800'
    // },
    // {
    //   id: 9,
    //   name: 'Quần Jeans Slim-Fit Classic Blue',
    //   price: 950000,
    //   primaryImg: 'https://picsum.photos/seed/picsum/200/300',
    //   hoverImg: 'https://picsum.photos/id/106/600/800'
    // }
  ];

  ngOnInit(): void {
    this.fetch_Products();
  }

  selectedProduct = signal<any | null>(null);
  selectedSize = signal<string>('M');

  openQuickView(product: any) {
    this.selectedProduct.set(product);
  }

  closeQuickView() {
    this.selectedProduct.set(null);
  }

  addToCartFromModal(product: any) {
    // Gọi ToastService thêm vào giỏ hàng với thông tin product + selectedSize()
    console.log('Thêm vào giỏ:', product.name, this.selectedSize());
    this.closeQuickView();
  }

  fetch_Products(): void{
    this.productService.getProduct().subscribe({
      next: (data : any) => {
        this.products = data;
      }
    })
  }
}
