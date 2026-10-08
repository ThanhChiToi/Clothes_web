import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSearchOpen = false;
  isMobileMenuOpen = false;
  isScrolled = false;
  cartCount = 3;
  searchQuery = '';

  navItems = [
  { label: 'Trang chủ', link: '/' },
  { 
    label: 'Sản phẩm', 
    link: '/products',
    badge: 'Hot',
    badgeClass: 'badge-hot',
    // Thêm danh sách con ở đây:
    children: [
      { label: 'Áo Nam', link: '/products/ao' },
      { label: 'Quần Nam', link: '/products/quan' },
      { label: 'Phụ Kiện', link: '/products/phu-kien', badge: 'NEW' }
    ]
  },
  { label: 'Bộ sưu tập', link: '/collections' },
  { label: 'Liên hệ', link: '/contact' }
];

  // navItems = [
  //   { label: 'Sản phẩm', link: '#products', badge: '' },
  //   { label: 'Hàng mới', link: '#new', badge: 'NEW', badgeClass: 'badge-new' },
  //   { label: 'Hàng Bán Chạy', link: '#bestseller', badge: 'HOT', badgeClass: 'badge-hot' },
  //   { label: 'OUTLET', link: '#outlet', badge: 'SALE', badgeClass: 'badge-sale' },
  //   { label: 'Collection', link: '#collection', badge: '' }
  // ];

  activeLink = 'Sản phẩm';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setActive(label: string) {
    this.activeLink = label;
    this.isMobileMenuOpen = false;
  }
}
