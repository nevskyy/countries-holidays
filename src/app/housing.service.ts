import { Injectable } from '@angular/core';
import { Country } from './country-interfaces';
import { HolidaysInfo } from './country-interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class countryService {
  presentYear = new Date().getFullYear();
  baseUrl = environment.apiBaseUrl;
  url = `${this.baseUrl}/AvailableCountries`;

  constructor() {}

  async getAllCountries(): Promise<Country[]> {
    const data = await fetch(this.url);

    return (await data.json()) ?? [];
  }

  async getCountryByCode(code: string): Promise<HolidaysInfo[] | undefined> {
    const data = await fetch(
      `https://date.nager.at/api/v3/PublicHolidays/${
        this.presentYear
      }/${code.toLocaleLowerCase()}`
    );

    return (await data.json()) ?? {};
  }
}
