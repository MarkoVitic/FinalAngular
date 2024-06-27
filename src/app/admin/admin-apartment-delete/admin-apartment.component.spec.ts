import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApartmentComponent } from './admin-apartment.component';

describe('AdminApartmentComponent', () => {
  let component: AdminApartmentComponent;
  let fixture: ComponentFixture<AdminApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
