import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReturnPolicyComponent {
  lastUpdated = signal<string>('05/08/2026');

  // Mục lục tiện ích scroll
  sections = signal([
    { id: 'sec-1', title: '1. Thời gian & Điều kiện đổi trả' },
    { id: 'sec-2', title: '2. Các trường hợp chấp nhận & Từ chối' },
    { id: 'sec-3', title: '3. Quy trình 4 bước đổi trả đơn giản' },
    { id: 'sec-4', title: '4. Biểu phí vận chuyển khi đổi trả' },
    { id: 'sec-5', title: '5. Chính sách & Thời gian hoàn tiền' },
  ]);

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
