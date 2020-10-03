import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaButtonComponent } from './sda-button.component';

describe('SdaButtonComponent', () => {
  let component: SdaButtonComponent;
  let fixture: ComponentFixture<SdaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
