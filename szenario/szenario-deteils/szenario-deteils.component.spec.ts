import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzenarioDeteilsComponent } from './szenario-deteils.component';

describe('SzenarioDeteilsComponent', () => {
  let component: SzenarioDeteilsComponent;
  let fixture: ComponentFixture<SzenarioDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzenarioDeteilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzenarioDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
