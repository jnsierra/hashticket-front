import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
