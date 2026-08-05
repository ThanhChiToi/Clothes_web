import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type GenderTab = 'men' | 'women';
type CategoryTab = 'tops' | 'bottoms' | 'dresses';

@Component({
  selector: 'app-choosing-size',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './choosing-size.component.html',
  styleUrl: './choosing-size.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoosingSizeComponent {
  selectedGender = signal<GenderTab>('men');
  selectedCategory = signal<CategoryTab>('tops');

  // Bảng size Áo Nam (Tops - Men)
  menTops = [
    { size: 'S', height: '1m55 - 1m65', weight: '50 - 58 kg', chest: '86 - 90', shoulder: '42' },
    { size: 'M', height: '1m65 - 1m72', weight: '59 - 68 kg', chest: '91 - 95', shoulder: '44' },
    { size: 'L', height: '1m72 - 1m78', weight: '69 - 76 kg', chest: '96 - 100', shoulder: '46' },
    { size: 'XL', height: '1m78 - 1m85', weight: '77 - 85 kg', chest: '101 - 106', shoulder: '48' },
    { size: 'XXL', height: 'Trên 1m80', weight: '86 - 95 kg', chest: '107 - 112', shoulder: '50' }
  ];

  // Bảng size Quần Nam (Bottoms - Men)
  menBottoms = [
    { size: '29 (S)', height: '1m58 - 1m65', weight: '52 - 58 kg', waist: '73 - 75', hips: '88 - 91' },
    { size: '30 (M)', height: '1m66 - 1m72', weight: '59 - 65 kg', waist: '76 - 78', hips: '92 - 95' },
    { size: '31 (L)', height: '1m70 - 1m75', weight: '66 - 72 kg', waist: '79 - 82', hips: '96 - 99' },
    { size: '32 (XL)', height: '1m73 - 1m80', weight: '73 - 78 kg', waist: '83 - 86', hips: '100 - 103' },
    { size: '34 (XXL)', height: '1m75 - 1m85', weight: '79 - 86 kg', waist: '87 - 91', hips: '104 - 108' }
  ];

  // Bảng size Áo Nữ (Tops - Women)
  womenTops = [
    { size: 'S', height: '1m50 - 1m58', weight: '42 - 48 kg', chest: '80 - 84', waist: '62 - 66' },
    { size: 'M', height: '1m58 - 1m64', weight: '49 - 54 kg', chest: '85 - 89', waist: '67 - 71' },
    { size: 'L', height: '1m64 - 1m70', weight: '55 - 60 kg', chest: '90 - 94', waist: '72 - 76' },
    { size: 'XL', height: 'Trên 1m68', weight: '61 - 67 kg', chest: '95 - 99', waist: '77 - 81' }
  ];

  // Bảng size Đầm / Váy Nữ (Dresses - Women)
  womenDresses = [
    { size: 'S', height: '1m50 - 1m58', weight: '42 - 48 kg', chest: '82', waist: '64', hips: '88' },
    { size: 'M', height: '1m58 - 1m64', weight: '49 - 54 kg', chest: '86', waist: '68', hips: '92' },
    { size: 'L', height: '1m64 - 1m70', weight: '55 - 60 kg', chest: '90', waist: '72', hips: '96' },
    { size: 'XL', height: 'Trên 1m68', weight: '61 - 67 kg', chest: '94', waist: '76', hips: '100' }
  ];

  setGender(gender: GenderTab): void {
    this.selectedGender.set(gender);
    if (gender === 'men' && this.selectedCategory() === 'dresses') {
      this.selectedCategory.set('tops');
    }
  }

  setCategory(category: CategoryTab): void {
    this.selectedCategory.set(category);
  }
}
