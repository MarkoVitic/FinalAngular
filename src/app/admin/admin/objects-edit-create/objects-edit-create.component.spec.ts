import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsEditCreateComponent } from './objects-edit-create.component';

describe('ObjectsEditCreateComponent', () => {
  let component: ObjectsEditCreateComponent;
  let fixture: ComponentFixture<ObjectsEditCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectsEditCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectsEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
