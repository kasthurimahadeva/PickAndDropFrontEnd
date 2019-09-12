import { Injectable } from '@angular/core';
import {Complaint} from './complaint.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  complaintsList: Complaint[];
  filteredComplaintlist: Complaint[];
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getComplaints() {
    this.http.get<Complaint[]>(this.baseUrl + 'Complaints').toPromise().then(
      res => {
        this.complaintsList = res;
        this.filteredComplaintlist = this.complaintsList;
      }
    );
  }

  saveComplaint(complaint: Complaint) {
    return this.http.post(this.baseUrl + 'Complaints', complaint);
  }

  updateComplaint(id: number, complaint: Complaint) {
    return this.http.put(this.baseUrl + 'Complaints/' + id, complaint);
  }

  findComplaint(id: number) {
    return this.complaintsList.filter(c => c.ComplaintId === id)[0];
  }
}
