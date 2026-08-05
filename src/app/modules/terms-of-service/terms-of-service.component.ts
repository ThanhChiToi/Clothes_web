import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './terms-of-service.component.html',
  styleUrl: './terms-of-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsOfServiceComponent {
  lastUpdated = signal<string>('05/08/2026');

  // Mục lục điều khoản
  sections = signal([
    { id: 'sec-1', title: '1. Quy định tài khoản & Sử dụng' },
    { id: 'sec-2', title: '2. Đặt hàng & Xác nhận đơn' },
    { id: 'sec-3', title: '3. Giá cả & Phương thức thanh toán' },
    { id: 'sec-4', title: '4. Chính sách giao hàng & Vận chuyển' },
    { id: 'sec-5', title: '5. Chính sách đổi trả & Hoàn tiền' },
    { id: 'sec-6', title: '6. Quyền sở hữu trí tuệ' },
    { id: 'sec-7', title: '7. Giới hạn trách nhiệm & Điều khoản chung' }
  ]);

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
