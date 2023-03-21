import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { PublicPagesModule } from './public-pages/public-pages.module';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  { path: '', component: PublicPagesModule },
  {
    path: 'auth',
    component: AuthModule,
    children: [{ path: 'signin', component: SigninComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
