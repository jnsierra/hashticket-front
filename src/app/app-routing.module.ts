import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPagesModule } from './public-pages/public-pages.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', component: PublicPagesModule },
  { path: 'signin', component: AuthModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
