import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiesComponent } from './ties.component';

describe('TiesComponent', () => {
  let component: TiesComponent;
  let fixture: ComponentFixture<TiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
