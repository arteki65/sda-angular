import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssPositionComponent } from './iss-position.component';

describe('IssPositionComponent', () => {
  let component: IssPositionComponent;
  let fixture: ComponentFixture<IssPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
