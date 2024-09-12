import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { countryService } from '../housing.service';
import { HolidaysInfo } from '../housing-location';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <h2 class="section-heading">Holidais in {{countryService.presentYear}}</h2>
      <br>
      <section class="listing-features" *ngFor="let country of countriesHolidays">
        <h3>{{country.name}}</h3>
        <br>
        <ul>
          <li>Local Holiday Name: {{ country?.localName }}</li>
          <li>Date: {{ country?.date }}</li>
          <li>
            Type: {{ country?.types?.[0] }}
          </li>
        </ul>
      </section>
    </article>
  `,
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
