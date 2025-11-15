import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdDetaileComponent } from './id-detaile.component';

describe('IdDetaileComponent', () => {
  let component: IdDetaileComponent;
  let fixture: ComponentFixture<IdDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdDetaileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
