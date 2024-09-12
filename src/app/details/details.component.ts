import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { countryService } from '../housing.service';
import { HolidaysInfo } from '../country-interfaces';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  countryService = inject(countryService);
  countriesHolidays: HolidaysInfo[] | undefined;
  years: number[] = [];
  selectedYear: number = 2024;

  constructor() {
    const countryCode = this.route.snapshot.params['code'];
    console.log('😛', countryCode)
    this.countryService.getCountryByCode(countryCode, this.selectedYear).then((country: HolidaysInfo[] | undefined) => {
      this.countriesHolidays = country;
      console.log(this.countriesHolidays)
    });

    this.generateYears();
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10;
    for (let year = currentYear; year >= startYear; year--) {
      this.years.push(year);
    }
    this.selectedYear = currentYear; 
  }

  onYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const year = +target.value; 
    this.selectedYear = year
    console.log('Selected Year:', year);

    const countryCode = this.route.snapshot.params['code'];
    this.countryService.getCountryByCode(countryCode, this.selectedYear).then((country: HolidaysInfo[] | undefined) => {
      this.countriesHolidays = country;
      console.log(this.countriesHolidays)
    });
  }
}
