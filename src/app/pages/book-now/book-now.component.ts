import { Component, OnInit } from '@angular/core';
import { ObjektiServicesService } from '../../services/objekti-services/objekti-services.service';
import { Objekti } from '../../models/objekti';
import { Apartman } from '../../models/apartman';
import { ApartmaniServicesService } from '../../services/apartmani-services/apartmani-services.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css',
})
export class BookNowComponent implements OnInit {
  dateNow: Date;
  datesForBooking: {
    day: number;
    month: string;
    year: number;
    dayOfWeek: string;
  }[];
  currentYear: number;
  allObjects: Objekti[];
  allApartments: Apartman[];
  stepForwarBack: number = 0;
  dateSelected: boolean = false;

  constructor(
    private objectServices: ObjektiServicesService,
    private apartmentServices: ApartmaniServicesService
  ) {
    this.dateNow = new Date();
    this.datesForBooking = [];
  }

  ngOnInit(): void {
    this.show15Days();
    console.log(this.datesForBooking);
    this.currentYear =
      this.datesForBooking[this.datesForBooking.length - 1].year;

    this.objectServices
      .getAllObjekti()
      .subscribe((objekat) => (this.allObjects = objekat));
    this.apartmentServices
      .getAllApartments(4)
      .subscribe((apartments) => (this.allApartments = apartments));
  }

  show15Days() {
    let step = this.stepForwarBack;

    for (let i = 0; i < 15; i++) {
      const futureDate = new Date();
      futureDate.setDate(this.dateNow.getDate() + (this.stepForwarBack + i));

      const day = futureDate.getDate();
      const month = this.getMonthOfYear(futureDate.getMonth());
      const year = futureDate.getFullYear();
      const dayOfWeek = this.getDayOfWeek(futureDate.getDay());

      this.datesForBooking.push({ day, month, year, dayOfWeek });
    }
  }

  test(index: number, nazivApartmana: string) {
    let apartman = nazivApartmana.split(' ').join('');
    let startDate = document.querySelectorAll(`.class-${apartman}`);

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        startDate[i].classList.add('active');
      }
    }
  }
  step(step: number) {
    console.log(step);
    if (step === 15) {
      this.stepForwarBack += step;
      console.log('plus', this.stepForwarBack);
      this.datesForBooking = [];
      this.show15Days();
    } else if (step === -15 && this.stepForwarBack > 0) {
      console.log(step);
      this.stepForwarBack = this.stepForwarBack - 15;
      console.log('minus', this.stepForwarBack);
      this.datesForBooking = [];
      this.show15Days();
    }
  }

  getDayOfWeek(dayIndex: number): string {
    const daysOfWeek = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
    return daysOfWeek[dayIndex];
  }
  getMonthOfYear(dayIndex: number): string {
    const daysOfWeek = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Avg',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ];
    return daysOfWeek[dayIndex];
  }
}
