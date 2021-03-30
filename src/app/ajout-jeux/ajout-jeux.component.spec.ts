import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutJeuxComponent } from './ajout-jeux.component';

describe('AjoutJeuxComponent', () => {
  let component: AjoutJeuxComponent;
  let fixture: ComponentFixture<AjoutJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutJeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
