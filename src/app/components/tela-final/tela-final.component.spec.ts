import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFinalComponent } from './tela-final.component';

describe('TelaFinalComponent', () => {
  let component: TelaFinalComponent;
  let fixture: ComponentFixture<TelaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
