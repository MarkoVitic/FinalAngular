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
    monthIndex: number;
  }[];
  currentYear: number;
  allObjects: Objekti[];
  allApartments: Apartman[];
  stepForwarBack: number = 0;
  dateSelected: {
    day: number;
    month: string;
    year: number;
    dayOfWeek: string;
    monthIndex: number;
  }[] = [];

  temporarylStem: number;
  numberOfNights: number;

  constructor(
    private objectServices: ObjektiServicesService,
    private apartmentServices: ApartmaniServicesService
  ) {
    this.dateNow = new Date();
    this.datesForBooking = [];
  }

  ngOnInit(): void {
    this.show15Days();

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
    for (let i = 0; i < 12; i++) {
      const futureDate = new Date();
      futureDate.setDate(this.dateNow.getDate() + (this.stepForwarBack + i));

      const day = futureDate.getDate();
      const month = this.getMonthOfYear(futureDate.getMonth());
      const monthIndex = futureDate.getMonth();
      const year = futureDate.getFullYear();
      const dayOfWeek = this.getDayOfWeek(futureDate.getDay());

      this.datesForBooking.push({ day, month, year, dayOfWeek, monthIndex });
    }
  }
  step(step: number) {
    if (step === 12) {
      this.stepForwarBack += step;

      this.datesForBooking = [];
      this.show15Days();
    } else if (step === -12 && this.stepForwarBack > 0) {
      this.stepForwarBack = this.stepForwarBack - 12;

      this.datesForBooking = [];
      this.show15Days();
    }
  }

  selectDate(index: number, nazivApartmana: string) {
    if (this.dateSelected.length <= 1) {
      this.dateSelected.push(this.datesForBooking[index]);
      if (this.dateSelected.length == 1) {
        this.temporarylStem = this.stepForwarBack;
      }

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

      for (let i = 0; i < startDate.length; i++) {
        const day = this.datesForBooking[i]?.day;
        if (this.dateSelected.length === 1 && i === index) {
          console.log(this.dateSelected[this.dateSelected.length - 1].day);
          startDate[i].classList.add('active');
        }
        if (
          this.dateSelected.length === 2 &&
          ((day >= this.dateSelected[0].day &&
            day <= this.dateSelected[1].day) ||
            (day >= this.dateSelected[1].day &&
              day <= this.dateSelected[0].day))
        ) {
          startDate[i].classList.add('active');
        }
        if (this.dateSelected.length === 2) {
          this.numberOfNights =
            this.dateSelected[1].day - this.dateSelected[0].day + 1;
        }
      }
    } else {
      alert('Da vidim da je problemOpet ti Brko! Sto pokusavas to!?');
      this.resetBookingStyles();
    }
  }

  //* Removes classes (bg-color) of of price when its selected more then 2  *//
  resetBookingStyles() {
    let allSlectedDivs = document.querySelectorAll('div');
    allSlectedDivs.forEach((div) => div.classList.remove('active'));
    allSlectedDivs.forEach((div) => {
      if (div.classList.contains('cijena')) {
        div.style.pointerEvents = 'auto';

        div.style.backgroundColor = ''; // Optional: to visually indicate the div is unclickable
        this.numberOfNights = 0;
      }
    });

    this.dateSelected = [];
  }
  //*Sets days of the week manulay*//
  getDayOfWeek(dayIndex: number): string {
    const daysOfWeek = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
    return daysOfWeek[dayIndex];
  }
  //*Sets month of the yea manualy*//
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

  /** Show Select Date */

  showHideSelectDate(): void {
    let selectDate = document.querySelector('#bookSelacteDate');
    let bookSerch = document.querySelector('#bookSearch');
    let sendReservation = document.querySelector('#sendReservation');

    if (selectDate.classList.contains('d-none')) {
      selectDate.classList.remove('d-none');
      sendReservation.classList.remove('d-none');
      bookSerch.classList.add('d-none');
    }
  }
}
