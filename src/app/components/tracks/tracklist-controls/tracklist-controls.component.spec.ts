import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracklistControlsComponent } from './tracklist-controls.component';

describe('TracklistControlsComponent', () => {
  let component: TracklistControlsComponent;
  let fixture: ComponentFixture<TracklistControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracklistControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracklistControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
