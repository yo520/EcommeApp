import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductsComponent } from './pruducts.component';

describe('PruductsComponent', () => {
  let component: PruductsComponent;
  let fixture: ComponentFixture<PruductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
