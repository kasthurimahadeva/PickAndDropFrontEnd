import { Component, OnInit } from '@angular/core';
import {ComplaintsService} from '../complaints.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Complaint} from '../complaint.model';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  id: number;
  complaint: Complaint;
  constructor(private complaintService: ComplaintsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.complaint = this.complaintService.findComplaint(this.id);
  }

  onBack(): void {
    this.router.navigate(['/complaints']);
  }

  onResolved() {
    this.complaint.Status = 'Resolved';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.router.navigate(['/complaints']);
      }
    );
  }

  onMove() {
    this.complaint.Status = 'Move to high level';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.router.navigate(['/complaints']);
      }
    );
  }
}
