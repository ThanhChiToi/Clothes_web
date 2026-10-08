import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductBasicComponent } from './list-product-basic.component';

describe('ListProductBasicComponent', () => {
  let component: ListProductBasicComponent;
  let fixture: ComponentFixture<ListProductBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
