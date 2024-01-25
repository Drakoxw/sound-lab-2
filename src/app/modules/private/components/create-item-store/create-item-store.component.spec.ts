import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemStoreComponent } from './create-item-store.component';

describe('CreateItemStoreComponent', () => {
  let component: CreateItemStoreComponent;
  let fixture: ComponentFixture<CreateItemStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateItemStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItemStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
