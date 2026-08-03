import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  checkoutForm: FormGroup;
  isSubmitted = false;

  // Quản lý mã giảm giá
  couponCode = '';
  discountAmount = 0;
  couponMessage = '';
  isCouponApplied = false;

  // Phí vận chuyển mặc định
  shippingFee = 30000;

  // Dữ liệu giỏ hàng mẫu
  cartItems: CartItem[] = [
    {
      id: 101,
      name: 'Áo Sơ Mi Nam Tay Dài Premium',
      color: 'Xanh Navy',
      size: 'L',
      price: 450000,
      quantity: 2,
      image: 'https://picsum.photos/id/1005/200/200'
    },
    {
      id: 102,
      name: 'Quần Kaki Nam Slimfit Co Giãn',
      color: 'Đen',
      size: '31',
      price: 520000,
      quantity: 1,
      image: 'https://picsum.photos/id/1025/200/200'
    }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      address: ['', [Validators.required]],
      note: [''],
      paymentMethod: ['cod', [Validators.required]]
    });
  }

  // Tăng / giảm số lượng
  updateQuantity(item: CartItem, change: number): void {
    const newQty = item.quantity + change;
    if (newQty >= 1) {
      item.quantity = newQty;
    }
  }

  // Xóa sản phẩm khỏi giỏ
  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  // Tạm tính
  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Tổng thanh toán
  get grandTotal(): number {
    if (this.cartItems.length === 0) return 0;
    return Math.max(0, this.subtotal + this.shippingFee - this.discountAmount);
  }

  // Áp dụng mã giảm giá
  applyCoupon(): void {
    const code = this.couponCode.trim().toUpperCase();
    if (code === 'STORE2026') {
      this.discountAmount = 50000;
      this.isCouponApplied = true;
      this.couponMessage = 'Đã áp dụng mã STORE2026 (-50.000đ)';
    } else if (code !== '') {
      this.isCouponApplied = false;
      this.couponMessage = 'Mã giảm giá không hợp lệ!';
    }
  }

  // Đặt hàng
  onPlaceOrder(): void {
    this.isSubmitted = true;

    if (this.checkoutForm.valid && this.cartItems.length > 0) {
      const orderData = {
        customer: this.checkoutForm.value,
        items: this.cartItems,
        pricing: {
          subtotal: this.subtotal,
          shipping: this.shippingFee,
          discount: this.discountAmount,
          total: this.grandTotal
        },
        createdAt: new Date()
      };

      console.log('Đơn hàng hoàn tất:', orderData);
      alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm.');
      this.router.navigate(['/']);
    }
  }
}
