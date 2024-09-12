import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { countryService } from '../housing.service';
import { HolidaysInfo } from '../country-interfaces';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  countryService = inject(countryService);
  countriesHolidays: HolidaysInfo[] | undefined;

  constructor() {
    const countryCode = this.route.snapshot.params['code'];
    console.log('😛', countryCode)
    this.countryService.getCountryByCode(countryCode).then((country: HolidaysInfo[] | undefined) => {
      this.countriesHolidays = country;
      console.log(this.countriesHolidays)
    });
  }

}
