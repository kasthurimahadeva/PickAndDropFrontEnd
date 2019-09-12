import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComplaintsService} from '../complaints.service';
import {Complaint} from '../complaint.model';
import {ToastrManager} from 'ng6-toastr-notifications';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-complaint',
  templateUrl: './new-complaint.component.html',
  styleUrls: ['./new-complaint.component.css']
})
export class NewComplaintComponent implements OnInit {
  complaintForm: FormGroup;
  complaint: Complaint;

  constructor(private complaintService: ComplaintsService,
              private formBuilder: FormBuilder,
              private toastr: ToastrManager,
              private router: Router) { }

  ngOnInit() {
    this.complaintForm = this.formBuilder.group({
      CustomerName: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email]],
      ComplaintContent: ['', Validators.required],
    });
  }

  saveComplaint() {
    this.complaint = this.complaintForm.value;
    this.complaint.Status = 'Pending';
    this.complaint.CreatedDateTime = new Date();
    this.complaintService.saveComplaint(this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint successfully sent', 'Success');
        this.router.navigate(['welcome']);
      }
    );

  }
}
