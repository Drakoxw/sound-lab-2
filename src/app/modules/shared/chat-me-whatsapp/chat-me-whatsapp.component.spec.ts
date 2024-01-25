import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMeWhatsappComponent } from './chat-me-whatsapp.component';

describe('ChatMeWhatsappComponent', () => {
  let component: ChatMeWhatsappComponent;
  let fixture: ComponentFixture<ChatMeWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMeWhatsappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatMeWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
