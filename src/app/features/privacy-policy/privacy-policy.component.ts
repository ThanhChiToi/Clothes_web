import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent {
  lastUpdated = signal<string>('05/08/2026');

  // Mục lục hỗ trợ scroll nhanh
  sections = signal([
    { id: 'sec-1', title: '1. Thu thập thông tin cá nhân' },
    { id: 'sec-2', title: '2. Mục đích sử dụng thông tin' },
    { id: 'sec-3', title: '3. Bảo mật thanh toán & VietQR' },
    { id: 'sec-4', title: '4. Chia sẻ thông tin với bên thứ ba' },
    { id: 'sec-5', title: '5. Quyền hạn của khách hàng' },
    { id: 'sec-6', title: '6. Thông tin liên hệ' },
  ]);

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
