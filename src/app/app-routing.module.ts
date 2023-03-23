import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './admin-module/event/event.component';
import { HomeAdminComponent } from './admin-module/home-admin/home-admin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PublicComponent } from './components/public/public.component';
import { EventEditComponent } from './admin-module/event-edit/event-edit.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'event', component: EventComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'eventEdit',
    component: EventEditComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
