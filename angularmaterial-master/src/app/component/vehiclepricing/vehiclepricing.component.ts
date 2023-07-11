// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import { CityService } from 'src/app/service/city.service';
// import { CountryService } from 'src/app/service/country.service';
// import { VehicleService } from 'src/app/service/vehicle.service';
// import { VehiclepricingService } from 'src/app/service/vehiclepricing.service';

// @Component({
//   selector: 'app-vehiclepricing',
//   templateUrl: './vehiclepricing.component.html',
//   styleUrls: ['./vehiclepricing.component.css']
// })
// export class VehiclepricingComponent {

//   // table

// citydatabasedata: any;
// page: number = 1;
// count: number = 0;
// tableSize: number = 3;
// tableSizes: any = [3, 6, 9, 12];
// p: number = 1;
// pageSize: any;
// dropdown: any;
// selectedOption: any;
// id: any;
// // pagination
// currentPage: number = 1;
// totalPages: number = 0;

// // other declartion
// countryname: any;
// isshow: any;
// vehiclepricingform!: FormGroup;
// citynamedata: any[]=[];
// addbuttonshow: boolean = false;
// updatebuttonshow: boolean = false;
// addupdate: boolean = false;
// city: any;
// vehiclepricingdatabasedata: any[] =[];
//   countrydata: any[]=[];
//   citydata: any[]=[];
//   country: any;
//   countryName: any;
//   vehicledata: any[]=[];
//   vehicle: any;
//   vehiclename: any;
//   cityName: any;
//   cityid: any;

//   vehiclepricingdatas: any  = {
//     _id:'',
//     country:'',
//     city: '',
//     vehicletype: '',
//     driverprofit: '',
//     minfare: '',
//     distanceforbaseprice: '',
//     baseprice: '',
//     priceperunitdistance: '',
//     priceperunittime: '',
//     maxspace: '',
//   }
//   vehiclepricingdata: any;



// constructor(
//   private formBuilder: FormBuilder,
//   private toster: ToastrService,
//   private _cityservice: CityService,
//   private _country: CountryService,
//   private http : HttpClient,
//   private _vehicle: VehicleService,
//   private _vehiclepricing : VehiclepricingService,
//   ) { }


//   ngOnInit(){
//     this.fetchData();
//     this.vehiclepricingform = this.formBuilder.group({
//       country_id: [''],
//       city_id: [''],
//       vehicle_id: [''],
//       driverprofit: [''],
//       minfare: [''],
//       distanceforbaseprice: [''],
//       baseprice: [''],
//       priceperunitdistance: [''],
//       priceperunittime: [''],
//       maxspace:['']
//     });

//   this._country.getcountrydatabasedata().subscribe({
//     next: (countries: any) => {
//       this.countrydata = countries
//       // console.log(this.countrydata);
//     },
//     error: (error) => {
//       console.log(error);
//     },
//     // console.log(this.usercountrycodedata);
//   });

//   this._cityservice.getcity().subscribe({
//     next: (cities: any) => {
//       this.citydata = cities
//       console.log(this.citydata);
//     },
//     error: (error) => {
//       console.log(error);
//     },
//     // console.log(this.usercountrycodedata);
//   });

//   this._vehicle.getvehicledata().subscribe((res) => {
//     this.vehicledata = res;
//     console.log(this.vehicledata);



//   });

//   // this._vehiclepricing.getpricing().subscribe((res)=>{
//   //   this.vehiclepricingdatabasedata = res ;
//   //   console.log(this.vehiclepricingdatabasedata);

//   // })
// }


// onSelected(value: string): void {
//   this.country = value
//   console.log(this.country); //  get id

//   // find countryname using countryid
//   this.countrydata.map((country: any) => {
//     if (country._id === value) {
//       this.countryName = country.countryname
//       console.log(this.countryName);
//     }
//   })

//   this.citynamedata = [];


//   //  match  the country id and city id for city details
//   this.citydata.map((city: any) => {

//     if (city.country_id === value) {
//       this.city = city
//       // console.log(this.city);
//       this.citynamedata.push(this.city);

//       console.log(this.citynamedata);


//     }
//   })

// }

// onSelectedcity(value: string){
//   this.city =  value
//   console.log(this.city);


// }

// onSelectedvehicle(value: string): void {
//   this.vehicle = value
//   console.log(this.vehicle);

//   this.vehicledata.map((vehicle: any) => {
//     if (vehicle._id === value) {
//       this.vehiclename = vehicle.vehiclename
//       // console.log(this.vehiclename);
//     }
//   })
//   }

// OnAddbuttonclick(): void {
//   this.isshow = true;
//   this.addbuttonshow = true;
//   this.updatebuttonshow = false;
//   if (this.isshow) {
//     this.isshow = this.isshow;
//     // console.log("hhhhhh");
//   } else {
//     this.isshow = !this.isshow;
//   }
//   this.vehiclepricingform.reset();
// }

// Onupdatebuttonclick(_id: string, pricing: any) {
//   this.addupdate = true; // addupdate for kiyare kai button submit thase ena mate che jiyare onupdatebutton function call thase atle addupdate true thase tiyare on submit ma addupdate true hase tiyare update user  thase
//   this.updatebuttonshow = true;
//   this.addbuttonshow = false;
//   this.vehiclepricingform.reset();
//   // console.log(_id);
//   this.id = pricing._id;
//   console.log(pricing.city_id );

//   if (this.isshow) {
//     this.isshow = this.isshow;
//     console.log('hhhhhh');
//   } else {
//     this.isshow = !this.isshow;
//   }
//   this.vehiclepricingform.patchValue({
//     country_id: pricing.country_id,
//     city_id: pricing.city_id ,
//     vehicle_id: pricing.vehicle_id,
//     driverprofit: pricing.driverprofit,
//     minfare: pricing.minfare,
//     distanceforbaseprice: pricing.distanceforbaseprice,
//     baseprice: pricing.baseprice,
//     priceperunitdistance: pricing.priceperunitdistance,
//     priceperunittime: pricing.priceperunittime,
//     maxspace: pricing.maxspace,
//   });
//   this.onSelected(pricing.country_id);
// }

// cancel() {
//   this.isshow = false;
// }


// OnSubmit() {

//   const formValue = this.vehiclepricingform.value;
//   const vehiclePricingData: any = {
//     _id:formValue._id,
//     country_id: formValue.country_id,
//     city_id:this.cityid ,
//     vehicle_id: formValue.vehicle_id,
//     driverprofit: formValue.driverprofit,
//     minfare: formValue.minfare,
//     distanceforbaseprice: formValue.distanceforbaseprice,
//     baseprice: formValue.baseprice,
//     priceperunitdistance: formValue.priceperunitdistance,
//     priceperunittime: formValue.priceperunittime,
//     maxspace: formValue.maxspace,

//   };

//   if (this.addupdate) {
//     // update
//     console.log(vehiclePricingData);

//     this._vehiclepricing.updatepricing( vehiclePricingData , this.id).subscribe({
//       next: (res: any) => {
//         this._vehiclepricing.getpricing().subscribe((res)=>{
//           this.vehiclepricingdatabasedata = res ;
//           console.log(this.vehiclepricingdatabasedata);

//         })
//         this.toster.success(res.message);
//       },
//       error: (error) => {
//         console.log(error.error.message);
//         this.toster.warning(error.error.message);
//       },
//     });
//   } else {
//     // add
//     this._vehiclepricing.addpricing(vehiclePricingData).subscribe({
//       next: (res: any) => {
//         this.vehiclepricingdatabasedata.push(res.pricingdata);
//         this.toster.success(res.message);
//       },
//       error: (error) => {
//         console.log(error.error.message);
//         this.toster.warning(error.error.message);
//       },
//     });
//     this.vehiclepricingform.reset();
//   }
// }

// Ondelete(_id: string) {
//   if (confirm('Are you sure you want to delete this user?')) {
//     this._vehiclepricing.deletepricing(_id).subscribe(
//       (res) => {
//         console.log(res);
//         this.fetchData();
//         this.toster.success(res.message);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
// }

// // fetchcitydata(): void {
// //   this._vehiclepricing.getpricing().subscribe(
// //     (response: any) => {
// //       this.vehiclepricingdatabasedata = response;
// //       console.log(response);
// //     },
// //     (error: any) => {
// //       console.log(error);
// //     }
// //   );
// // }

// // onPageChange(event: any): void {
// //   this.page = event;
// //   this.fetchcitydata();
// // }

// // onPageSizeChange(event: any): void {
// //   this.tableSize = event.target.value;
// //   this.page = 1;
// //   this.fetchcitydata();
// // }


// fetchData(): void {
//   const page = this.currentPage;
//   const limit = 2; // Set the desired limit value

//   this._vehiclepricing.getpricingpagination(page , limit).subscribe(
//     (response: any) => {
//       this.vehiclepricingdata = response.vehiclepricingdata; // Update this line
//       this.totalPages = response.totalPage; // Update this line
//       console.log(response);
//     },
//     (error: any) => {
//       console.log(error);
//     }
//   );
// }

// previousPage(): void {
//   if (this.currentPage > 1) {
//     this.currentPage--;
//     this.fetchData();
//   }
// }

// nextPage(): void {
//   if (this.currentPage < this.totalPages) {
//     this.currentPage++;
//     this.fetchData();
//   }
// }
// }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CityService } from 'src/app/service/city.service';
import { CountryService } from 'src/app/service/country.service';
import { VehicleService } from 'src/app/service/vehicle.service';
import { VehiclepricingService } from 'src/app/service/vehiclepricing.service';

@Component({
  selector: 'app-vehiclepricing',
  templateUrl: './vehiclepricing.component.html',
  styleUrls: ['./vehiclepricing.component.css']
})
export class VehiclepricingComponent implements OnInit {

  citydatabasedata: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  p: number = 1;
  pageSize: any;
  dropdown: any;
  selectedOption: any;
  id: any;
  currentPage: number = 1;
  totalPages: number = 0;
  countryname: any;
  isshow: any;
  vehiclepricingform!: FormGroup;
  citynamedata: any[] = [];
  addbuttonshow: boolean = false;
  updatebuttonshow: boolean = false;
  addupdate: boolean = false;
  city: any;
  vehiclepricingdatabasedata: any[] = [];
  countrydata: any[] = [];
  citydata: any[] = [];
  country: any;
  countryName: any;
  vehicledata: any[] = [];
  vehicle: any;
  vehiclename: any;
  cityName: any;
  cityid: any;
  limit: number = 3;
  vehiclepricingdatas: any = {
    _id: '',
    country_id: '',
    city_id: '',
    vehicletype: '',
    driverprofit: '',
    minfare: '',
    distanceforbaseprice: '',
    baseprice: '',
    priceperunitdistance: '',
    priceperunittime: '',
    maxspace: '',
  };
  vehiclepricingdata: any[]=[];


  constructor(
    private formBuilder: FormBuilder,
    private toster: ToastrService,
    private _cityservice: CityService,
    private _country: CountryService,
    private http: HttpClient,
    private _vehicle: VehicleService,
    private _vehiclepricing: VehiclepricingService
  ) {}

  ngOnInit() {
    this.fetchData();
    this.vehiclepricingform = this.formBuilder.group({
      country_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      vehicle_id: ['',[Validators.required]],
      driverprofit: ['',[Validators.required , Validators.pattern('^[0-9]+$')]],
      minfare: ['',[Validators.required]],
      distanceforbaseprice: ['',[Validators.required]],
      baseprice: ['',[Validators.required]],
      priceperunitdistance: ['',[Validators.required]],
      priceperunittime: ['',[Validators.required]],
      maxspace: ['',[Validators.required]]
    });

    this._country.getcountrydatabasedata().subscribe({
      next: (countries: any) => {
        this.countrydata = countries;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this._cityservice.getcity().subscribe({
      next: (cities: any) => {
        this.citydata = cities;
        // console.log(this.citydata);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this._vehicle.getvehicledata().subscribe((res) => {
      this.vehicledata = res;
      console.log(this.vehicledata);
    });
  }

  onSelected(value: string): void {
    this.country = value;
    console.log(this.country);

    // this.countrydata.map((country: any) => {
    //   if (country._id === value) {
    //     this.countryName = country.countryname;
    //     console.log(this.countryName);
    //   }
    // });

    this.citynamedata = [];

    this.citydata.map((city: any) => {
      if (city.country_id === value) {
        this.city = city;
        console.log(this.city);

        this.citynamedata.push(this.city);
        console.log(this.citynamedata);
      }
    });
  }

  onSelectedcity(value: string) {

    this.city = value;
    console.log(this.city);
  }

  onSelectedvehicle(value: string): void {
    this.vehicle = value;
    console.log(this.vehicle);

    this.vehicledata.map((vehicle: any) => {
      if (vehicle._id === value) {
        this.vehiclename = vehicle.vehiclename;
      }
    });
  }

  OnAddbuttonclick(): void {
    this.isshow = true;
    this.addbuttonshow = true;
    this.updatebuttonshow = false;

    if (this.isshow) {
      this.isshow = this.isshow;
    } else {
      this.isshow = !this.isshow;
    }
    this.vehiclepricingform.reset();
  }

  Onupdatebuttonclick(_id: string, pricing: any) {
    this.addupdate = true;
    this.updatebuttonshow = true;
    this.addbuttonshow = false;
    this.vehiclepricingform.reset();

    this.id = pricing._id;
    console.log(pricing.city_id);

    if (this.isshow) {
      this.isshow = this.isshow;
      console.log('hhhhhh');
    } else {
      this.isshow = !this.isshow;
    }
    this.vehiclepricingform.patchValue({
      country_id: pricing.country_id,
      city_id: pricing.city_id,
      vehicle_id: pricing.vehicle_id,
      driverprofit: pricing.driverprofit,
      minfare: pricing.minfare,
      distanceforbaseprice: pricing.distanceforbaseprice,
      baseprice: pricing.baseprice,
      priceperunitdistance: pricing.priceperunitdistance,
      priceperunittime: pricing.priceperunittime,
      maxspace: pricing.maxspace
    });
    console.log(this.vehiclepricingform);

    this.onSelected(pricing.country_id);
  }

  cancel() {
    this.isshow = false;
  }

  OnSubmit() {

    if(this.vehiclepricingform.invalid){
      this.vehiclepricingform.markAllAsTouched();
      return;
    }
    // console.log(this.cityid);

    const formValue = this.vehiclepricingform.value;
    const vehiclePricingData: any = {
      _id: formValue._id,
      country_id: formValue.country_id,
      city_id: this.city,
      vehicle_id: formValue.vehicle_id,
      driverprofit: formValue.driverprofit,
      minfare: formValue.minfare,
      distanceforbaseprice: formValue.distanceforbaseprice,
      baseprice: formValue.baseprice,
      priceperunitdistance: formValue.priceperunitdistance,
      priceperunittime: formValue.priceperunittime,
      maxspace: formValue.maxspace
    };

    if (this.addupdate) {
      this._vehiclepricing.updatepricing(vehiclePricingData, this.id).subscribe({
        next: (res: any) => {
          this._vehiclepricing.getpricing().subscribe((res) => {
            this.vehiclepricingdatabasedata = res;
            console.log(this.vehiclepricingdatabasedata);
          });
          this.toster.success(res.message);
          this.fetchData()
        },
        error: (error) => {
          console.log(error.error.message);
          this.toster.warning(error.error.message);
        }
      });
    } else {
      this._vehiclepricing.addpricing(vehiclePricingData).subscribe({
        next: (res: any) => {
          this.vehiclepricingdatabasedata.push(res.pricingdata);
          this.toster.success(res.message);
          this.fetchData()
        },
        error: (error) => {
          console.log(error.error.message);
          this.toster.warning(error.error.message);
        }
      });
      this.vehiclepricingform.reset();
    }
  }

  Ondelete(_id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this._vehiclepricing.deletepricing(_id).subscribe(
        (res) => {
          console.log(res);
          this.fetchData();
          this.toster.success(res.message);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  fetchData(): void {
    const page = this.currentPage;
   // Set the desired limit value

    this._vehiclepricing.getpricingpagination(page, this.limit).subscribe(
      (response: any) => {
        this.vehiclepricingdata = response;
        this.totalPages = response.totalPage;
        console.log(response.pricing);
        const data = response.pricing.map((obj:any) => obj)
        console.log(this.vehiclepricingdata);
        console.log(data);
        this.vehiclepricingdata = data


      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onChangeLimit() {
    this.currentPage = 1; // Reset the current page to 1
    this.fetchData(); // Fetch data based on the new limit
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchData();
    }
  }
}

