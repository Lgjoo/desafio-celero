import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraVezComponent } from './mostra-vez.component';

describe('MostraVezComponent', () => {
  let component: MostraVezComponent;
  let fixture: ComponentFixture<MostraVezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraVezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraVezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
