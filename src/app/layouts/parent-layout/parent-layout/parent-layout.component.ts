import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from "../../component/footer/footer.component";
import { CollectionsComponent } from "../../../modules/collections/collections.component";

@Component({
  selector: 'app-parent-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './parent-layout.component.html',
  styleUrl: './parent-layout.component.scss'
})
export class ParentLayoutComponent {

}
