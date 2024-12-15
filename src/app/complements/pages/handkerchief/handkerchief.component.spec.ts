import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandkerchiefComponent } from './handkerchief.component';

describe('HandkerchiefComponent', () => {
  let component: HandkerchiefComponent;
  let fixture: ComponentFixture<HandkerchiefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandkerchiefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandkerchiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
