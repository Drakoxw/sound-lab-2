import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdminImagesComponent } from './modal-admin-images.component';

describe('ModalAdminImagesComponent', () => {
  let component: ModalAdminImagesComponent;
  let fixture: ComponentFixture<ModalAdminImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAdminImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAdminImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
