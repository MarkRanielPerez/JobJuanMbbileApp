import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { JobListingsPage } from './job-listings.page';

describe('JobListingsPage', () => {
  let component: JobListingsPage;
  let fixture: ComponentFixture<JobListingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JobListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
