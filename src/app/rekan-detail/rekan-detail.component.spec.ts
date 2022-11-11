import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekanDetailComponent } from './rekan-detail.component';

describe('RekanDetailComponent', () => {
  let component: RekanDetailComponent;
  let fixture: ComponentFixture<RekanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
