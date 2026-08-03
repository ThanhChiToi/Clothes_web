import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  season: string;
  itemCount: number;
  image: string;
  isFeatured?: boolean;
}


@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

  collections: Collection[] = [
    {
      id: 'summer-vibes-2026',
      title: 'Summer Vibes 2026',
      subtitle: 'Phong cách phóng khoáng, thoáng mát cho những chuyến đi hè.',
      season: 'Bộ sưu tập Hè 2026',
      itemCount: 24,
      image: 'https://picsum.photos/id/1025/1200/800',
      isFeatured: true
    },
    {
      id: 'urban-minimalist',
      title: 'Urban Minimalist',
      subtitle: 'Tối giản, tinh tế cho phong cách đường phố hiện đại.',
      season: 'Xu hướng 2026',
      itemCount: 18,
      image: 'https://picsum.photos/id/1059/800/800'
    },
    {
      id: 'office-gentleman',
      title: 'Office Gentleman',
      subtitle: 'Lịch lãm, chuyên nghiệp nơi công sở.',
      season: 'Bộ sưu tập Thu 2026',
      itemCount: 30,
      image: 'https://picsum.photos/id/1062/800/800'
    },
    {
      id: 'denim-heritage',
      title: 'Denim Heritage',
      subtitle: 'Chất bụi phủi kinh điển bất chấp thời gian.',
      season: 'Bản giới hạn',
      itemCount: 15,
      image: 'https://picsum.photos/id/1005/800/800'
    }
  ];

}
