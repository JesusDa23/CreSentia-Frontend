import { Component } from '@angular/core';
import { BanerComponent } from "../../../../sections/baner/baner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BanerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
