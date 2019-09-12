import { Component, OnInit } from '@angular/core';
import {ComplaintsService} from '../complaints.service';
import {Complaint} from '../complaint.model';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.complaintService.filteredComplaintlist = this.listFilter ? this.performFilter(this.listFilter)
      : this.complaintService.complaintsList;
  }
  constructor(private complaintService: ComplaintsService) { }

  ngOnInit() {
    this.complaintService.getComplaints();
  }

  performFilter(filterBy: string): Complaint[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.complaintService.complaintsList.filter((complaint: Complaint) =>
      (complaint.Status.toLocaleLowerCase() === filterBy));
  }

}
