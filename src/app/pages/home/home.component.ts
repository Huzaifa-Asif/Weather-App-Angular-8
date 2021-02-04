import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
import { RestApiService } from '../../services/api/rest-api.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search_data = {
    title: ''
  };
  istanbulData;
  berlinData;
  londonData;
  helsinkiData;
  dublinData;
  vancouverData;
  weatherData = [];
  locationArray = [2344116, 638242, 44418, 565346, 560743, 9807];
  constructor(
    private route: Router,
    private toastrService: ToastrService,
    private api: RestApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    // this.getWeatherData();
    this.getWeather();
  }

  getWeather(){
    let i=0;
    for(i; i<this.locationArray.length; i++){
      this.api.get('location/'+this.locationArray[i]).then((response: any) => {
        this.weatherData.push(response);
        console.log(response);
      });
    }

    console.log("weather Data")
    console.log(this.weatherData)

  }

  getWeatherData() {
    // Get Istanbul Weather
    this.api.get('location/2344116/').then((response: any) => {
      this.istanbulData = response;
      this.weatherData.push(response);
      console.log(this.istanbulData);
    });

    // Get Berlin Weather
    this.api.get('location/638242/').then((response: any) => {
      this.berlinData = response;
      this.weatherData.push(response);
      console.log(this.berlinData);
    });

    // Get London Weather
    this.api.get('location/44418/').then((response: any) => {
      this.londonData = response;
      this.weatherData.push(response);
      console.log(this.londonData);
    });

    // Get Helsinki Weather
    this.api.get('location/565346/').then((response: any) => {
      this.helsinkiData = response;
      this.weatherData.push(response);
      console.log(this.helsinkiData);
    });

    // Get Dublin Weather
    this.api.get('location/560743/').then((response: any) => {
      this.dublinData = response;
      this.weatherData.push(response);
      console.log(this.dublinData);
    });

    // Get Vancouver Weather
    this.api.get('location/9807/').then((response: any) => {
      this.vancouverData = response;
      this.weatherData.push(response);
      console.log(this.vancouverData);
    });


  }


  viewWeatherDetail(woeid) {
    console.log("woeid: " + woeid)
    this.route.navigate(['/weather', woeid]);
  }

  search() {

    if (this.search_data.title === '') {
      this.toastrService.error("Kindly Enter name of City");
      return false;
    }
    console.log("Search: " + this.search_data.title)
    this.route.navigate(['/search', this.search_data.title]);
  }


}
