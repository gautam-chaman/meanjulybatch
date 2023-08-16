import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygraphComponent } from './mygraph.component';

describe('MygraphComponent', () => {
  let component: MygraphComponent;
  let fixture: ComponentFixture<MygraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MygraphComponent]
    });
    fixture = TestBed.createComponent(MygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
