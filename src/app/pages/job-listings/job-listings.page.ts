import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.page.html',
  styleUrls: ['./job-listings.page.scss'],
})
export class JobListingsPage {
  jobListings: any[] = [
  {
    title: 'Software Developer',
    company: 'ABC Coporation',
    location: 'San Juan',
  }

];
  constructor() { }

  viewJobDetails(job: any) {
    console.log(job);
  }

}
