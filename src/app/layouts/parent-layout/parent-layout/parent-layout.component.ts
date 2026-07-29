import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../component/navbar/navbar.component';

@Component({
  selector: 'app-parent-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './parent-layout.component.html',
  styleUrl: './parent-layout.component.scss'
})
export class ParentLayoutComponent {

}
