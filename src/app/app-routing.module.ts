import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './admin-module/category/category.component';
import { CategoryEditComponent } from './admin-module/category-edit/category-edit.component';
import { EventComponent } from './admin-module/event/event.component';
import { EventEditComponent } from './admin-module/event-edit/event-edit.component';
import { HomeAdminComponent } from './admin-module/home-admin/home-admin.component';
import { MusicBandComponent } from './admin-module/music-band/music-band.component';
import { MusicBandEditComponent } from './admin-module/music-band-edit/music-band-edit.component';
import { PresentationComponent } from './admin-module/presentation/presentation.component';
import { PresentationEditComponent } from './admin-module/presentation-edit/presentation-edit.component';
import { PublicComponent } from './components/public/public.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ImagesEventComponent } from './admin-module/images-event/images-event.component';
import { ImagesEventEditComponent } from './admin-module/images-event-edit/images-event-edit.component';
import { ConfigEventComponent } from './admin-module/config-event/config-event.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard]},
  { path: 'categoryEdit', component: CategoryEditComponent, canActivate: [AuthGuard]},
  { path: 'eventInsert', component: EventEditComponent, canActivate: [AuthGuard] },
  { path: 'eventEdit/:id', component: EventEditComponent, canActivate: [AuthGuard] },
  { path: 'event', component: EventComponent, canActivate: [AuthGuard]},
  { path: 'musicBand', component: MusicBandComponent, canActivate: [AuthGuard] },
  { path: 'musicBandEdit', component: MusicBandEditComponent, canActivate: [AuthGuard] },
  { path: 'presentation/:id', component: PresentationComponent, canActivate: [AuthGuard] },
  { path: 'presentationInsert/:idEvent', component: PresentationEditComponent, canActivate: [AuthGuard] },
  { path: 'presentationUpdate/:idEvent/:id', component: PresentationEditComponent, canActivate: [AuthGuard] },
  { path: 'imageEvent/:id', component: ImagesEventComponent, canActivate: [AuthGuard] },
  { path: 'imageEventInsert/:idEvent', component: ImagesEventEditComponent, canActivate: [AuthGuard] },
  { path: 'eventImagesUpdate/:idEvent/:id', component: ImagesEventEditComponent, canActivate: [AuthGuard] },
  { path: 'configEvent/:idEvent', component: ConfigEventComponent, canActivate:[AuthGuard]},
  { path: 'signin', component: SigninComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
