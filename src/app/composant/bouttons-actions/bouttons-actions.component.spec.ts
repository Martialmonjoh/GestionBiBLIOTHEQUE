import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonsActionsComponent } from './bouttons-actions.component';

describe('BouttonsActionsComponent', () => {
  let component: BouttonsActionsComponent;
  let fixture: ComponentFixture<BouttonsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouttonsActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BouttonsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
