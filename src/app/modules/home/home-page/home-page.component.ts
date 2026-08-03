import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CollectionsComponent } from "../../collections/collections.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BannerComponent, CollectionsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
