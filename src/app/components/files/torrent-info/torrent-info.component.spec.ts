import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentInfoComponent } from './torrent-info.component';

describe('TorrentInfoComponent', () => {
  let component: TorrentInfoComponent;
  let fixture: ComponentFixture<TorrentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
