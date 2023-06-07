import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransaccionComponent } from './lista-transaccion.component';

describe('ListaTransaccionComponent', () => {
  let component: ListaTransaccionComponent;
  let fixture: ComponentFixture<ListaTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
