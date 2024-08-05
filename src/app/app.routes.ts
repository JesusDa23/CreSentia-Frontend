import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { HomeComponent } from './pages/public/home/home/home.component';
import { AdultsRegistrationComponent } from './pages/public/adults-registration/adults-registration.component';
import { FamilyRegistrationComponent } from './pages/public/family-registration/family-registration.component';
import { TherapistRegistrationComponent } from './pages/public/therapist-registration/therapist-registration.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { UserProfileComponent } from './pages/public/user-profile/user-profile.component';
import { PersonalDataComponent } from './pages/public/personal-data/personal-data.component';
import { GreetingComponent } from './pages/public/greeting/greeting.component';
import { BeThankfulComponent } from './pages/public/be-thankful/be-thankful.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path:'adults', component: AdultsRegistrationComponent},
    {path:'family', component:FamilyRegistrationComponent},
    {path:'therapist', component: TherapistRegistrationComponent},
    {path:'user-profile', component: UserProfileComponent},
    {path:'personal-data', component: PersonalDataComponent},
    {path:'greeting', component:GreetingComponent},
    {path:'thankful', component:BeThankfulComponent}
];
