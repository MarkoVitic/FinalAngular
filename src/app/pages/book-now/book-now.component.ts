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
  dateSelected: number[] = [];

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

  selectDate(index: number, nazivApartmana: string) {
    if (this.dateSelected.length <= 1) {
      this.dateSelected.push(index);
      if (this.dateSelected[0] <= index) {
        if (this.dateSelected) {
          let apartman = nazivApartmana.split(' ').join('');
          let startDate = document.querySelectorAll(`.class-${apartman}`);
          let allSlectedDivs = document.querySelectorAll('div');
          allSlectedDivs.forEach((div) => {
            if (
              !div.classList.contains(`class-${apartman}`) &&
              div.classList.contains('cijena')
            ) {
              div.style.pointerEvents = 'none';

              div.style.backgroundColor = 'lightblue'; // Optional: to visually indicate the div is unclickable
            }
          });

          for (
            let i = 0;
            i <= this.dateSelected[this.dateSelected.length - 1];
            i++
          ) {
            if (
              i >= this.dateSelected[this.dateSelected.length - 1] ||
              (i <= this.dateSelected[this.dateSelected.length - 1] &&
                i >= this.dateSelected[0])
            ) {
              startDate[i].classList.add('active');
            }
          }
        }
      } else {
        alert('E Brko! Sto pokusavas to!?');
        this.resetBookingStyles();
      }
    } else {
      alert('Opet ti Brko! Sto pokusavas to!?');
      this.resetBookingStyles();
    }
  }

  resetBookingStyles() {
    let allSlectedDivs = document.querySelectorAll('div');
    allSlectedDivs.forEach((div) => div.classList.remove('active'));
    allSlectedDivs.forEach((div) => {
      if (div.classList.contains('cijena')) {
        div.style.pointerEvents = 'auto';

        div.style.backgroundColor = ''; // Optional: to visually indicate the div is unclickable
      }
    });

    this.dateSelected = [];
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
