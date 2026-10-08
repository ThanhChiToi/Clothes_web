import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10,11}$')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  contactForm: FormGroup;
  isSubmitted = false;

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      console.log('Dữ liệu form liên hệ:', this.contactForm.value);
      alert('Cảm ơn bạn đã gửi liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');

      // Reset form sau khi gửi thành công
      this.contactForm.reset();
      this.isSubmitted = false;
    }
  }

}
