import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        [src]="
          country.countryCode
            ? 'https://flagsapi.com/' + country.countryCode + '/flat/64.png'
            : '../../assets/Flag-of-Svalbard-Jan-Mayen-Islands.webp'
        "
        alt="Exterior photo of {{ country.name }} "
        class="listing-photo"
      />
      <h2 class="listing-heading">{{ country.name }}</h2>
      <p class="listing-location">
        Country Code: <b>{{ country.countryCode }}</b>
      </p>
      <a [routerLink]="['/details', country.countryCode]"
        >Learn about holydays</a
      >
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() country!: Country;
}
