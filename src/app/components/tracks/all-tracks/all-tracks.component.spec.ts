import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTracksComponent } from './all-tracks.component';

describe('AllTracksComponent', () => {
  let component: AllTracksComponent;
  let fixture: ComponentFixture<AllTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
