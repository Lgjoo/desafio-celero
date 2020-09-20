import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoPersonagensComponent } from './selecao-personagens.component';

describe('SelecaoPersonagensComponent', () => {
  let component: SelecaoPersonagensComponent;
  let fixture: ComponentFixture<SelecaoPersonagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoPersonagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
