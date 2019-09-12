import { Component, OnInit } from '@angular/core';
import {ComplaintsService} from '../complaints/complaints.service';
import {Complaint} from '../complaints/complaint.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  pageTitle = 'Pick and Drop';
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
  constructor(private complaintService: ComplaintsService) {
    this.listFilter = '';
  }

  ngOnInit() {
  }

  performFilter(filterBy: string): Complaint[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.complaintService.complaintsList.filter((complaint: Complaint) =>
      (complaint.Status.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
      (complaint.CustomerName.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
      (complaint.EmailAddress.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }

}
