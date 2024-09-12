import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Country } from '../housing-location';
import { countryService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form (submit)="filterResults(filter.value, $event)">
        <input
          type="text"
          placeholder="Filter by city"
          #filter
        />
        <button
          class="primary"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let country of filtredLocationList"
        [country]="country"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countriesList: Country[] = [];
  countryService: countryService = inject(countryService);
  filtredLocationList: Country[] = [];

  constructor() {
    this.countryService.getAllCountries().then((countriesList: Country[]) => {
      this.countriesList = countriesList;
      console.log('👹', this.countriesList)
      this.filtredLocationList = this.countriesList;
    });
  }


  filterResults(text: string, event: Event) {
    event.preventDefault();
    if (!text || text.trim() === '') {
      this.filtredLocationList = this.countriesList;
      return;
    }

    this.filtredLocationList = this.countriesList.filter(
      (country) =>
        country?.name
          .toLocaleLowerCase()
          .includes(text.toLowerCase().trim())
    );
  }
}
