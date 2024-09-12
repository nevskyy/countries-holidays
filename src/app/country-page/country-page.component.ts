import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../country-interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country.page.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent {
  @Input() country!: Country;
}
