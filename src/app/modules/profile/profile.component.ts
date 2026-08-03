import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type ProfileTab = 'info' | 'orders' | 'address' | 'password';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
  itemsCount: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  activeTab: ProfileTab = 'info';
  profileForm: FormGroup;
  passwordForm: FormGroup;

  isInfoSubmitted = false;
  isPasswordSubmitted = false;

  orders: Order[] = [
    { id: 'ORD-2026-8891', date: '01/08/2026', total: 1250000, status: 'Completed', itemsCount: 2 },
    { id: 'ORD-2026-7723', date: '25/07/2026', total: 450000, status: 'Pending', itemsCount: 1 },
    { id: 'ORD-2026-5510', date: '10/06/2026', total: 2100000, status: 'Cancelled', itemsCount: 3 }
  ];

  constructor(private fb: FormBuilder) {
    // Form thông tin cá nhân
    this.profileForm = this.fb.group({
      fullName: ['Nguyễn Văn A', [Validators.required, Validators.minLength(2)]],
      email: ['nguyenvana@gmail.com', [Validators.required, Validators.email]],
      phone: ['0901234567', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      gender: ['male'],
      dob: ['1998-05-15']
    });

    // Form đổi mật khẩu
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Validator kiểm tra mật khẩu mới và xác nhận mật khẩu
  passwordMatchValidator(g: FormGroup) {
    const newPass = g.get('newPassword')?.value;
    const confirmPass = g.get('confirmPassword')?.value;
    return newPass === confirmPass ? null : { mismatch: true };
  }

  setActiveTab(tab: ProfileTab): void {
    this.activeTab = tab;
  }

  onUpdateProfile(): void {
    this.isInfoSubmitted = true;
    if (this.profileForm.valid) {
      console.log('Cập nhật profile:', this.profileForm.value);
      alert('Cập nhật thông tin tài khoản thành công!');
    }
  }

  onChangePassword(): void {
    this.isPasswordSubmitted = true;
    if (this.passwordForm.valid) {
      console.log('Đổi mật khẩu:', this.passwordForm.value);
      alert('Đổi mật khẩu thành công!');
      this.passwordForm.reset();
      this.isPasswordSubmitted = false;
    }
  }
}
