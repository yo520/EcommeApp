import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgepasstFormComponent } from './forgepasst-form.component';

describe('ForgepasstFormComponent', () => {
  let component: ForgepasstFormComponent;
  let fixture: ComponentFixture<ForgepasstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgepasstFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgepasstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
