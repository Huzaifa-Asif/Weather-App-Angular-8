import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
import { RestApiService } from '../../services/api/rest-api.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  search_data = {
    title: ''
  };

  constructor(
    private route: Router,
    private toastrService: ToastrService,
    private api: RestApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    // this.getWeatherData();
  }

  // getWeatherData() {
  //   // Get Istanbul Weather
  //   this.api.get('location/2344116/').then((response: any) => {
  //     this.istanbulData = response;
  //     console.log(this.istanbulData);
  //   });

  //   // Get Berlin Weather
  //   this.api.get('location/638242/').then((response: any) => {
  //     this.berlinData = response;
  //     console.log(this.berlinData);
  //   });

  //   // Get London Weather
  //   this.api.get('location/44418/').then((response: any) => {
  //     this.londonData = response;
  //     console.log(this.londonData);
  //   });

  //   // Get Helsinki Weather
  //   this.api.get('location/565346/').then((response: any) => {
  //     this.helsinkiData = response;
  //     console.log(this.helsinkiData);
  //   });

  //   // Get Helsinki Weather
  //   this.api.get('location/565346/').then((response: any) => {
  //     this.helsinkiData = response;
  //     console.log(this.helsinkiData);
  //   });

  //   // Get Dublin Weather
  //   this.api.get('location/560743/').then((response: any) => {
  //     this.dublinData = response;
  //     console.log(this.dublinData);
  //   });

  //   // Get Vancouver Weather
  //   this.api.get('location/9807/').then((response: any) => {
  //     this.vancouverData = response;
  //     console.log(this.vancouverData);
  //   });


  // }


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
