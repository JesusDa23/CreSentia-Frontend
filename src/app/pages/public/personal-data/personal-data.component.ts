import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.profileForm = this.fb.group({
      sexo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: ['', Validators.required],
      eps: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Formulario enviado:', this.profileForm.value);
      // Aquí puedes añadir la lógica para enviar los datos al backend o a otra parte de tu aplicación
    }
  }

  navigate(){
    this.router.navigate(['/thankful'])
  }
}
