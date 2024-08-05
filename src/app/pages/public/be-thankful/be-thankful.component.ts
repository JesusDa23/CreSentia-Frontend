import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-be-thankful',
  standalone: true,
  imports: [],
  templateUrl: './be-thankful.component.html',
  styleUrl: './be-thankful.component.css'
})
export class BeThankfulComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/personal-data']); 
    }, 2000); 
  }
}
