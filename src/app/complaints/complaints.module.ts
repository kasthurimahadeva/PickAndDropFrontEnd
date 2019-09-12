import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { NewComplaintComponent } from './new-complaint/new-complaint.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ComplaintsListComponent, ComplaintDetailsComponent, NewComplaintComponent],
  exports: [
    ComplaintsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComplaintsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComplaintsModule { }
