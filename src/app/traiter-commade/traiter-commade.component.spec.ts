import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterCommadeComponent } from './traiter-commade.component';

describe('TraiterCommadeComponent', () => {
  let component: TraiterCommadeComponent;
  let fixture: ComponentFixture<TraiterCommadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterCommadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterCommadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
