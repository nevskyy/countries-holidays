import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPageComponent } from './country-page.component';

describe('HousingLocationComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountryPageComponent]
    });
    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
