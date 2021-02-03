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
  restaurantData;
  constructor(
    private route: Router,
    private toastrService: ToastrService,
    private api: RestApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this._getApprovedRestaurantData();
  }

  _getApprovedRestaurantData(){

      this.api.get('restaurant/get_approved_restaurant').then((response: any) => {
      this.restaurantData = response.data;
        console.log(this.restaurantData);
      // this.spinner.hide();
     
  
      }, () => {
        this.toastrService.success("Failed!', 'Something went wrong while fetching your profile.");
      });
    
  }


  viewRestaurant(restaurant_id){
  console.log("restaurant_id: "+restaurant_id)
    this.route.navigate(['/menu_restaurant', restaurant_id]);
  }

  search(){

    if(this.search_data.title === '') {
      this.toastrService.error("Kindly Enter Restaurant Name or Place to find Restaurants");
      return false;
    }
    console.log("Search: "+this.search_data.title)
    this.route.navigate(['/search_restaurant', this.search_data.title]);
  }


}
