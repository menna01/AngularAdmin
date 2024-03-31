import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaitemsComponent } from './mediaitems.component';

describe('MediaitemsComponent', () => {
  let component: MediaitemsComponent;
  let fixture: ComponentFixture<MediaitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
