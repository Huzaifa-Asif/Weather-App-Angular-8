import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';


import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmDirectionModule } from 'agm-direction';
import { NgxFileDropModule } from 'ngx-file-drop';
import { RestApiService } from './services/api/rest-api.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AsyncPipe } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { WeatherDetailComponent } from './pages/weather-detail/weather-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    WeatherComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule,
    NgxFileDropModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_QD2_rlwEFGhCK0oj2n6cixsvX0D3zgk',
      libraries: ['places']
    }),
    AgmDirectionModule,
    GooglePlaceModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ RestApiService, AsyncPipe,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
