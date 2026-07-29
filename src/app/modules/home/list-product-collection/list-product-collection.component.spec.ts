import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductCollectionComponent } from './list-product-collection.component';

describe('ListProductCollectionComponent', () => {
  let component: ListProductCollectionComponent;
  let fixture: ComponentFixture<ListProductCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
