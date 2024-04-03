import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { notDeepEqual } from 'assert';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddformComponent } from './addform/addform.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // {path:"root",component:AppComponent},
  {path:"",redirectTo:"home", pathMatch:'full'},
  {path:"home",component:HomeComponent},
  // {path:"home",canActivate:[authGuard],component:HomeComponent},repeat

  // {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"addform",component:AddformComponent},
  {path:"about",component:AboutComponent},
  {path:"tv",component:TvComponent},
  {path:"people",component:PeopleComponent},
  {path:"update/:id",component:UpdateComponent},
  // { path: 'update', component: UpdateComponent, data: { productData:null } },

  {path:"movieDetails/:media_type/:id",component:MovieDetailsComponent},//take 2 parameters

  {path:"movies",component:MoviesComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
