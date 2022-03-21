import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCommandesComponent } from './afficher-commandes.component';

describe('AfficherCommandesComponent', () => {
  let component: AfficherCommandesComponent;
  let fixture: ComponentFixture<AfficherCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
