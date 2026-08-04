import { Injectable, signal } from '@angular/core';

export interface ToastItem {
  id: number;
  title: string;
  price: number;
  image: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts = signal<ToastItem[]>([]);

  // Hàm gọi khi thêm vào giỏ hàng
  showProductAdded(product: { name: string; price: number; image: string }) {
    const id = Date.now();
    const newToast: ToastItem = {
      id,
      title: product.name,
      price: product.price,
      image: product.image,
      message: 'Đã thêm vào giỏ hàng'
    };

    // Thêm vào danh sách
    this.toasts.update(list => [...list, newToast]);

    // Tự động tắt sau 4 giây
    setTimeout(() => {
      this.remove(id);
    }, 3000);
  }

  // Xóa toast theo ID
  remove(id: number) {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
