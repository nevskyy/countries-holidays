
export interface Country {
  countryCode: string,
  name: string,
} 

export interface HolidaysInfo 	
  {
    date: string,
    localName: string,
    name: string,
    countryCode: string,
    global: true,
    counties: string[],
    launchYear: 0,
    types: string[]
  }
