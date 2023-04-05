import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ArtistComponent } from './admin-module/artist/artist.component';
import { ArtistEditComponent } from './admin-module/artist-edit/artist-edit.component';
import { CategoryComponent } from './admin-module/category/category.component';
import { CategoryEditComponent } from './admin-module/category-edit/category-edit.component';
import { ConfigEventComponent } from './admin-module/config-event/config-event.component';
import { ConfigEventEditComponent } from './admin-module/config-event-edit/config-event-edit.component';
import { EventComponent } from './admin-module/event/event.component';
import { EventEditComponent } from './admin-module/event-edit/event-edit.component';
import { EventCategoryComponent } from './admin-module/event-category/event-category.component';
import { EventCategoryEditComponent } from './admin-module/event-category-edit/event-category-edit.component';
import { HomeAdminComponent } from './admin-module/home-admin/home-admin.component';
import { ImagesEventComponent } from './admin-module/images-event/images-event.component';
import { ImagesEventEditComponent } from './admin-module/images-event-edit/images-event-edit.component';
import { MusicBandComponent } from './admin-module/music-band/music-band.component';
import { MusicBandEditComponent } from './admin-module/music-band-edit/music-band-edit.component';
import { PresentationComponent } from './admin-module/presentation/presentation.component';
import { PresentationEditComponent } from './admin-module/presentation-edit/presentation-edit.component';
import { PublicComponent } from './components/public/public.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ZoneComponent } from './admin-module/zone/zone.component';
import { ZoneEditComponent } from './admin-module/zone-edit/zone-edit.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'artist', component: ArtistComponent, canActivate: [AuthGuard] },
  { path: 'artistEdit', component: ArtistEditComponent, canActivate: [AuthGuard] },
  { path: 'artistEdit/:id', component: ArtistEditComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'categoryEdit', component: CategoryEditComponent, canActivate: [AuthGuard] },
  { path: 'categoryEdit/:id', component: CategoryEditComponent, canActivate: [AuthGuard] },
  { path: 'configEvent/:idEvent', component: ConfigEventComponent, canActivate: [AuthGuard] },
  { path: 'configEventInsert/:idEvent', component: ConfigEventEditComponent, canActivate: [AuthGuard] },
  { path: 'configEventUpdate/:idEvent/:id', component: ConfigEventEditComponent, canActivate: [AuthGuard] },
  { path: 'event', component: EventComponent, canActivate: [AuthGuard] },
  { path: 'eventCategory', component: EventCategoryComponent, canActivate: [AuthGuard] },
  { path: 'eventCategoryInsert', component: EventCategoryEditComponent, canActivate: [AuthGuard] },
  { path: 'eventCategoryUpdate/:id', component: EventCategoryEditComponent, canActivate: [AuthGuard] },
  { path: 'eventEdit/:id', component: EventEditComponent, canActivate: [AuthGuard] },
  { path: 'eventImagesUpdate/:idEvent/:id', component: ImagesEventEditComponent, canActivate: [AuthGuard] },
  { path: 'eventInsert', component: EventEditComponent, canActivate: [AuthGuard] },
  { path: 'imageEvent/:id', component: ImagesEventComponent, canActivate: [AuthGuard] },
  { path: 'imageEventInsert/:idEvent', component: ImagesEventEditComponent, canActivate: [AuthGuard] },
  { path: 'musicBand', component: MusicBandComponent, canActivate: [AuthGuard] },
  { path: 'musicBandEdit', component: MusicBandEditComponent, canActivate: [AuthGuard] },
  { path: 'musicBandEdit/:id', component: MusicBandEditComponent, canActivate: [AuthGuard] },
  { path: 'presentation/:id', component: PresentationComponent, canActivate: [AuthGuard] },
  { path: 'presentationInsert/:idEvent', component: PresentationEditComponent, canActivate: [AuthGuard] },
  { path: 'presentationUpdate/:idEvent/:id', component: PresentationEditComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'zone', component: ZoneComponent, canActivate: [AuthGuard] },
  { path: 'zoneEdit', component: ZoneEditComponent, canActivate: [AuthGuard] },
  { path: 'zoneEdit/:id', component: ZoneEditComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
