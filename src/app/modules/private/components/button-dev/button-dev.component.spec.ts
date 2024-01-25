import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDevComponent } from './button-dev.component';

describe('ButtonDevComponent', () => {
  let component: ButtonDevComponent;
  let fixture: ComponentFixture<ButtonDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
