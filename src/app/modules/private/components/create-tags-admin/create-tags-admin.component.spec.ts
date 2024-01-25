import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagsAdminComponent } from './create-tags-admin.component';

describe('CreateTagsAdminComponent', () => {
  let component: CreateTagsAdminComponent;
  let fixture: ComponentFixture<CreateTagsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTagsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTagsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
