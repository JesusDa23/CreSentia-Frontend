import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/personal-data']); 
    }, 2000); 
  }

}
