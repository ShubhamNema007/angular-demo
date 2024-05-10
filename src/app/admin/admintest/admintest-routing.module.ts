import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmintestComponent } from './admintest.component';

const routes: Routes = [{ 
  path: '', component: AdmintestComponent
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmintestRoutingModule { }
