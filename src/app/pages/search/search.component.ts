import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
import { RestApiService } from '../../services/api/rest-api.service';


import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  search_data = {
    title: ''
  };
  restaurantData;
  search_title;
  nodata;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private toastrService: ToastrService,
    private api: RestApiService,
    private spinner: NgxSpinnerService,
  ) { 
    this.search_title = this.router.snapshot.paramMap.get("search_title");
    console.log("search_title: "+this.search_title)
  }

  ngOnInit() {
    this._getSearchRestaurantData();
  }

  _getSearchRestaurantData(){

      this.api.get('restaurant/search/restaurantByNameAddress/'+ this.search_title).then((response: any) => {
      if(response.status){
        this.restaurantData = response.data;
      }
      else{
        this.toastrService.info('', response.message);
        this.nodata= true
      }  
      console.log(this.restaurantData);
      // this.spinner.hide();
     
  
      }, () => {
        this.toastrService.info('', 'Something went wrong while fetching restaurants');
      });
    
  }


  viewRestaurant(restaurant_id){
  console.log("restaurant_id: "+restaurant_id)
    this.route.navigate(['/menu_restaurant', restaurant_id]);
  }


}
