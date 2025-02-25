import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPassFormComponent } from './rest-pass-form.component';

describe('RestPassFormComponent', () => {
  let component: RestPassFormComponent;
  let fixture: ComponentFixture<RestPassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestPassFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
