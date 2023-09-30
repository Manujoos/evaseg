import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },         // Ruta raíz
  { path: 'login', component: LoginComponent },   // Ruta para el componente Login
  { path: 'recoverPassword', component: RecoverPasswordComponent } // Ruta para el componente recover password
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
