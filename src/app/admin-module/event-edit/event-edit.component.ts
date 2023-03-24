import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { City } from 'src/app/entities/city';
import { Country } from 'src/app/entities/country';
import { Department } from 'src/app/entities/department';
import { Event } from 'src/app/entities/event';
import { CityService } from 'src/app/service/city.service';
import { CountryService } from 'src/app/service/country.service';
import { DepartmentService } from 'src/app/service/department.service';


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit{

  event: Event;
  countries: Country[];
  departments: Department[];
  cities: City[];
  countryCode: number;
  departmentCode: number;

  constructor(private _countryService: CountryService, private _departmentService: DepartmentService, private _cityService: CityService){
    this.event = new Event();
    this.countries = [];
    this.departments = [];
    this.cities = [];
    this.countryCode = 0;
    this.departmentCode = 0;
  }

  ngOnInit(): void {
    this.findCountries();
    this.event.eventStatus = 'CREATED';
  }
  findCountries(){
    this._countryService.getCountries().subscribe(resp => {
      this.countries = resp;
    });
  }
  changeCountry(event:MatSelectChange){
    this.findDepartments();
  }
  findDepartments(){
    this._departmentService.getDepartmentByCountryCode(this.countryCode).subscribe(resp => {
      this.departments = resp;
    });
  }
  changeDepartment(event:MatSelectChange){
    console.log(event);
    console.log(this.departmentCode);
    this.findCities();
  }
  findCities(){
    console.log(this.event);
    this._cityService.getCitiesByDepartamentCode(this.event.departmentCode).subscribe(resp => {
      this.cities = resp;
    });
  }
  ejecutarAccion(f: NgForm){
    if( f.invalid){
      alert('No funciona');
      return 
    }
    alert('Envia el formulario');
  }

}
