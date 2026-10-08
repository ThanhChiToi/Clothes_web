import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Hàm tiện ích để get các form control trên HTML cho ngắn gọn
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Giả lập gọi API Login
    console.log('Dữ liệu gửi đi:', this.loginForm.value);

    setTimeout(() => {
      this.isLoading = false;
      // Nếu thành công, điều hướng về trang chủ
      // this.router.navigate(['/']);
    }, 1500);
  }
}
