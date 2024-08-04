import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { HomeComponent } from './pages/public/home/home/home.component';
import { AdultsRegistrationComponent } from './pages/public/adults-registration/adults-registration.component';
import { FamilyRegistrationComponent } from './pages/public/family-registration/family-registration.component';
import { TherapistRegistrationComponent } from './pages/public/therapist-registration/therapist-registration.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'adults', component: AdultsRegistrationComponent},
    {path:'family', component:FamilyRegistrationComponent},
    {path:'therapist', component: TherapistRegistrationComponent}
];
