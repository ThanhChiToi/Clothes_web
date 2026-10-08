import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { 
      validators: this.passwordMatchValidator // Gắn validator kiểm tra khớp mật khẩu cho toàn bộ form
    });
  }

  // Custom Validator kiểm tra 2 mật khẩu
  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password !== confirmPassword && confirmPassword !== '') {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    
    // Giả lập gọi API Register
    console.log('Dữ liệu Đăng ký gửi đi:', this.registerForm.value);
    
    setTimeout(() => {
      this.isLoading = false;
      // Thành công thì chuyển hướng về trang đăng nhập
      // this.router.navigate(['/login']);
    }, 1500);
  }
}
