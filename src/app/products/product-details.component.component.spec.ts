import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetails } from './product-details.component.component';

describe('ProductDetails.ComponentComponent', () => {
  let component: ProductDetails;
  let fixture: ComponentFixture<ProductDetails>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetails]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
