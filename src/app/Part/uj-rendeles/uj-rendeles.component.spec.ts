import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjRendelesComponent } from './uj-rendeles.component';

describe('UjRendelesComponent', () => {
  let component: UjRendelesComponent;
  let fixture: ComponentFixture<UjRendelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjRendelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjRendelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
