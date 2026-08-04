import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from "../../component/footer/footer.component";
import { CollectionsComponent } from "../../../modules/collections/collections.component";
import { ToastContainerComponent } from "../../component/toast-container/toast-container.component";

@Component({
  selector: 'app-parent-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastContainerComponent],
  templateUrl: './parent-layout.component.html',
  styleUrl: './parent-layout.component.scss'
})
export class ParentLayoutComponent {

}
