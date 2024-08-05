import { Component } from '@angular/core';
import { BanerComponent } from "../../../../sections/baner/baner.component";
import { AboutUsComponent } from "../../../../sections/about-us/about-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BanerComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
