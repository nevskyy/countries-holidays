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
  filtredCountriesList: Country[] = [];

  constructor() {
    this.countryService.getAllCountries().then((countriesList: Country[]) => {
      this.countriesList = countriesList;
      this.filtredCountriesList = this.countriesList;
    });
  }

  randomPage() {
    const shuffled = [...this.countriesList].sort(() => 0.5 - Math.random());
    this.filtredCountriesList = shuffled.slice(0, 3);
  }


  filterResults(text: string, event: Event) {
    event.preventDefault();
    if (!text || text.trim() === '') {
      this.filtredCountriesList = this.countriesList;
      return;
    }

    this.filtredCountriesList = this.countriesList.filter(
      (country) =>
        country?.name
          .toLocaleLowerCase()
          .includes(text.toLowerCase().trim())
    );
  }
}
