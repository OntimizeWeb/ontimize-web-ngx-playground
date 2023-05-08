import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputDateRangeComponent } from './date-range.component';


describe('InputDateRangeComponent', () => {
  let component: InputDateRangeComponent;
  let fixture: ComponentFixture<InputDateRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
