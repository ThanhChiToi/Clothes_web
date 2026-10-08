import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.scss'
})
export class OrderSuccessComponent implements OnInit, OnDestroy {
  orderId = 'ORD-2026-8891';
  totalAmount = 1420000;
  paymentMethod = 'bank'; // 'bank' | 'cod'
  successPayment = false;

  // Thông tin chuyển khoản VietQR
  bankInfo = {
    bankName: 'MB Bank (Ngân hàng Quân Đội)',
    accountNo: '090123456789',
    accountName: 'NGUYEN VAN A (STORE CLOTHING)',
    transferContent: 'ORD20268891'
  };

  timeLeft = 900; // 15 phút = 900 giây
  timerInterval: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Lấy orderId từ URL nếu có
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.orderId = id;

    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  // Format phút : giây
  get formattedTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // Link tạo mã QR VietQR động (chuẩn Napas247)
  get vietQrUrl(): string {
    return `https://img.vietqr.io/image/MB-${this.bankInfo.accountNo}-compact2.png?amount=${this.totalAmount}&addInfo=${this.bankInfo.transferContent}&accountName=${encodeURIComponent(this.bankInfo.accountName)}`;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    alert(`Đã sao chép: ${text}`);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
