import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubNavComponent } from './pub-nav.component';

describe('PubNavComponent', () => {
  let component: PubNavComponent;
  let fixture: ComponentFixture<PubNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
