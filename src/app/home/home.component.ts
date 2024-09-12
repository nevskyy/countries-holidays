import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from '../country-page/country-page.component';
import { Country } from '../country-interfaces';
import { countryService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountryPageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countriesList: Country[] = [];
  countryService: countryService = inject(countryService);
  filtredLocationList: Country[] = [];

  constructor() {
    this.countryService.getAllCountries().then((countriesList: Country[]) => {
      this.countriesList = countriesList;
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
