import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildSonComponent } from './view-child-son.component';

describe('ViewChildSonComponent', () => {
  let component: ViewChildSonComponent;
  let fixture: ComponentFixture<ViewChildSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
