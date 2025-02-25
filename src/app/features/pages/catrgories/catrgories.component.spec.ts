import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrgoriesComponent } from './catrgories.component';

describe('CatrgoriesComponent', () => {
  let component: CatrgoriesComponent;
  let fixture: ComponentFixture<CatrgoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatrgoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatrgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
