import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../../shared/service/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  template: `
    <div class="toast-wrapper">
      <div *ngFor="let toast of toastService.toasts()" class="toast-card animate-slide-up">
        
        <!-- Ảnh thu nhỏ sản phẩm -->
        <div class="toast-img-wrapper">
          <img [src]="toast.image" [alt]="toast.title" class="toast-img" />
          <div class="check-icon">✓</div>
        </div>

        <!-- Thông tin tên + giá + thông báo -->
        <div class="toast-content">
          <div class="toast-status mb-2">
            <span>{{ toast.message }}</span>
            <hr>
          </div>
          <h6 class="toast-title mb-1">{{ toast.title }}</h6>
          <div class="toast-price">{{ toast.price | currency:'VND':'symbol':'1.0-0' }}</div>
        </div>

      </div>
    </div>
  `,
  styleUrl: './toast-container.component.scss'
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
}
