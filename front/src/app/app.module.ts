import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirqueComponent } from './cirque/cirque.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammationComponent } from './programmation/programmation.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'cirque',
    component: CirqueComponent
  },
  {
    path: 'programmation',
    component: ProgrammationComponent
  },

  {
    path: 'galerie',
    component: GalerieComponent
  },

  {
    path: 'reservation',
    component: ReservationComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: '',
    redirectTo: '/cirque',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CirqueComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammationComponent,
    GalerieComponent,
    ReservationComponent,
    ContactComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
