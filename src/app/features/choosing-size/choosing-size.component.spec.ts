import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingSizeComponent } from './choosing-size.component';

describe('ChoosingSizeComponent', () => {
  let component: ChoosingSizeComponent;
  let fixture: ComponentFixture<ChoosingSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosingSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosingSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
