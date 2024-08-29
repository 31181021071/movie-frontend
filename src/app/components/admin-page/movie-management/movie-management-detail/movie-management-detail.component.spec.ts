import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieManagementDetailComponent } from './movie-management-detail.component';

describe('MovieManagementDetailComponent', () => {
  let component: MovieManagementDetailComponent;
  let fixture: ComponentFixture<MovieManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieManagementDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
