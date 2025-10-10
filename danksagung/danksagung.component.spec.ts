import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanksagungComponent } from './danksagung.component';

describe('DanksagungComponent', () => {
  let component: DanksagungComponent;
  let fixture: ComponentFixture<DanksagungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanksagungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanksagungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
