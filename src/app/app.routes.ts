import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WebAppComponent } from './components/webapp/webapp.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'webapp', component: WebAppComponent },
    { path: '**', redirectTo: 'login' }
];