import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './admin-module/event/event.component';
import { HomeAdminComponent } from './admin-module/home-admin/home-admin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  { path: '', component: PublicComponent  },
  { path: 'homeAdmin', component: HomeAdminComponent},
  { path: 'event', component: EventComponent},
  { path: 'signin', component: SigninComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
