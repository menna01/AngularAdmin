import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaitemsComponent } from './mediaitems/mediaitems.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddformComponent } from './addform/addform.component';
import { UpdateComponent } from './update/update.component';
import { OrdersComponent } from './orders/orders.component';
// import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    AboutComponent,
    NotfoundComponent,
    FooterComponent,
    MediaitemsComponent,
    MovieDetailsComponent,
    AddformComponent,
    UpdateComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
