import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaudocumentComponent } from './nouveaudocument.component';

describe('NouveaudocumentComponent', () => {
  let component: NouveaudocumentComponent;
  let fixture: ComponentFixture<NouveaudocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveaudocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveaudocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
