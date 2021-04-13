import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderContainerComponent } from './order-container.component';

describe('OrderContainerComponent', () => {
  let component: OrderContainerComponent;
  let fixture: ComponentFixture<OrderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
