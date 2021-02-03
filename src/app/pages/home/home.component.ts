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
  constructor(
    private route: Router,
    private toastrService: ToastrService,
    private api: RestApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
      // Get Istanbul Weather
      this.api.get('location/2344116/').then((response: any) => {
      this.istanbulData = response;
        console.log(this.istanbulData);
      });
      
    
  }


  viewRestaurant(restaurant_id){
    console.log("restaurant_id: "+restaurant_id)
    this.route.navigate(['/menu_restaurant', restaurant_id]);
  }

  search(){

    if(this.search_data.title === '') {
      this.toastrService.error("Kindly Enter name of City or Country");
      return false;
    }
    console.log("Search: "+this.search_data.title)
    this.route.navigate(['/search_restaurant', this.search_data.title]);
  }


}
