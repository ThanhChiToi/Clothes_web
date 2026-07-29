import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface BannerSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  slides: BannerSlide[] = [
    {
      id: 1,
      image: 'assets/images/logobanner.webp',
      badge: 'Bộ Tập Mới 2026',
      title: 'Thời Trang Mùa Hè Năng Động',
      subtitle: 'Giảm giá lên đến 50% cho toàn bộ bộ sưu tập mới.',
      link: '/products'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600',
      badge: 'Hot Deal',
      title: 'Phụ Kiện Điện Tử Cao Cấp',
      subtitle: 'Sắm tai nghe, đồng hồ thông minh với giá ưu đãi.',
      link: '/products'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',
      badge: 'Khuyến Mãi Khủng',
      title: 'Đồ Gia Dụng Thông Minh',
      subtitle: 'Nâng tầm không gian sống gia đình bạn ngay hôm nay.',
      link: '/products'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600',
      badge: 'Miễn Phí Vận Chuyển',
      title: 'Đồng Hồ & Trang Sức Sang Trọng',
      subtitle: 'Nhập mã FREESHIP cho mọi đơn hàng từ 500k.',
      link: '/products'
    }
  ];

  currentIndex: number = 0;
  private autoSlideInterval: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.stopAutoSlide();

    // Chạy setInterval NGOÀI Angular Zone để không làm treo SSR Server
    this.ngZone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        // Khi chuyển slide, gọi lại Zone để Angular cập nhật lại giao diện (UI)
        this.ngZone.run(() => {
          this.nextSlide();
          this.cdr.markForCheck(); // Cập nhật lại UI mượt mà
        });
      }, 10000);
    });
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.startAutoSlide();
  }
}