import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../shared/service/toast.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/service/products.service';

interface ProductDetail {
  id: number;
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private toastService = inject(ToastService);
  private productService = inject(ProductsService)

  id : number = 0;
  product : any = {
    id: 101,
    name: 'Áo Polo Nam Marvel Spider-Man Edition',
    sku: 'POLO-SPIDER-2026',
    price: 1200000,
    originalPrice: 1500000,
    rating: 4.8,
    reviewCount: 128,
    description: 'Áo Polo chất liệu Cotton Mercerized cao cấp, thoáng khí, co giãn 4 chiều. Họa tiết Spider-Man in chìm tinh tế ở ngực áo.',
    images: [
      'https://picsum.photos/id/1005/800/1000',
      'https://picsum.photos/id/1025/800/1000',
      'https://picsum.photos/id/1059/800/1000',
      'https://picsum.photos/id/1062/800/1000'
    ],
    colors: [
      { name: 'Đen Classic', hex: '#111111' },
      { name: 'Trắng Sữa', hex: '#f8f9fa' },
      { name: 'Xanh Navy', hex: '#1b2a4a' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  };

  // State quản lý lựa chọn của người dùng
  selectedImageIndex = 0;
  selectedColor = this.product.colors[0];
  selectedSize = 'M';
  quantity = 1;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.fetch_Product_Id(this.id);
  }

  // Đổi ảnh chính khi hover hoặc click thumbnail
  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  // Tăng/Giảm số lượng
  updateQuantity(delta: number): void {
    const newQty = this.quantity + delta;
    if (newQty >= 1 && newQty <= 99) {
      this.quantity = newQty;
    }
  }

  addToCart(product: any) {
    // 1. Logic thêm vào giỏ hàng của bạn ở đây...

    // 2. Kích hoạt Toast hiển thị góc dưới
    this.toastService.showProductAdded({
      name: product.name || 'Áo Sơ Mi Silk Desire',
      price: product.price || 450000,
      image: product.image || 'https://picsum.photos/id/1059/100/100'
    });
  }

  fetch_Product_Id(id : number): void{
    this.productService.getProduct(id).subscribe({
      next: (data : any) => {
        this.product = data;
      }
    })
  }

}
