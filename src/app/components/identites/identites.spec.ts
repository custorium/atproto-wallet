import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Identites } from './identites';

describe('Identites', () => {
  let component: Identites;
  let fixture: ComponentFixture<Identites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Identites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Identites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
