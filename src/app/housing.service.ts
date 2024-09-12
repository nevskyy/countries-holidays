import { Injectable } from '@angular/core';
import { Country } from './housing-location';
import { HolidaysInfo } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class countryService {
  presentYear = new Date().getFullYear();
  url = 'https://date.nager.at/api/v3/AvailableCountries'
 
  constructor() {} 

  async getAllCountries(): Promise<Country[]> {
    const data = await fetch(this.url);

    // console.log('🍎', await data.json());

    return await data.json() ?? [];
  }

  async getCountryByCode(code: string): Promise<HolidaysInfo[] | undefined> {
    const data = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${this.presentYear}/${code.toLocaleLowerCase()}`)

    // console.log('👍', await data.json())
    return await data.json() ?? {}
  }

  // submitApplication(firstName: string, lastName: string, email: string) {
  //   console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  // }
}
