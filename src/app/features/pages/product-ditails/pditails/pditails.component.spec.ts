import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PditailsComponent } from './pditails.component';

describe('PditailsComponent', () => {
  let component: PditailsComponent;
  let fixture: ComponentFixture<PditailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PditailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PditailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
