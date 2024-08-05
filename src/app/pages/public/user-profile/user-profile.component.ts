import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profileForm: FormGroup;
  photoUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      nickname: ['', Validators.required],
    });
  }

  goBack() {
    this.router.navigate(['/therapist'])
  }

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoUrl = e.target!.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;
      console.log('Nombre:', formValue.nombre);
      console.log('Nickname:', formValue.nickname);
      // Aquí puedes añadir la lógica para enviar los datos al backend o a otra parte de tu aplicación
    }
  }
}
