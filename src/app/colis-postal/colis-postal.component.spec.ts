import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisPostalComponent } from './colis-postal.component';

describe('ColisPostalComponent', () => {
  let component: ColisPostalComponent;
  let fixture: ComponentFixture<ColisPostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisPostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisPostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
