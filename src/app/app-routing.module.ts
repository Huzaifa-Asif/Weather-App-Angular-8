import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { WeatherDetailComponent } from './pages/weather-detail/weather-detail.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'search/:search_title',
    component : SearchComponent
  },
  {
    path: 'weather/:woeid',
    component : WeatherDetailComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
