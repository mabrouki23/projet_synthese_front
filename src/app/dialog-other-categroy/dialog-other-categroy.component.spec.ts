import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOtherCategroyComponent } from './dialog-other-categroy.component';

describe('DialogOtherCategroyComponent', () => {
  let component: DialogOtherCategroyComponent;
  let fixture: ComponentFixture<DialogOtherCategroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOtherCategroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOtherCategroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
