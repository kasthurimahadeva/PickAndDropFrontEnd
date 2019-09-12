import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComplaintsListComponent} from './complaints-list/complaints-list.component';
import {ComplaintDetailsComponent} from './complaint-details/complaint-details.component';
import {NewComplaintComponent} from './new-complaint/new-complaint.component';


const routes: Routes = [
  {
    path: 'complaint/create',
    component: NewComplaintComponent
  },
  {
    path: 'complaints',
    component: ComplaintsListComponent
  },
  {
    path: 'complaint/:id',
    component: ComplaintDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
