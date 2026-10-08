import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  emailInput: string = '';


  onSubscribe(): void {
    if (this.emailInput.trim()) {
      console.log('Đăng ký email:', this.emailInput);
      alert('Cảm ơn bạn đã đăng ký nhận thông tin!');
      this.emailInput = '';
    }
  }
}
