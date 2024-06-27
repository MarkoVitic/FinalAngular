import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentEditCreateComponent } from './apartment-edit-create.component';

describe('ApartmentEditCreateComponent', () => {
  let component: ApartmentEditCreateComponent;
  let fixture: ComponentFixture<ApartmentEditCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApartmentEditCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
