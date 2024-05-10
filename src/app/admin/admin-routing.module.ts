import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admintest',
    pathMatch:'full' //it's like telling the router to look at the entire web address (URL) to decide if it's the right page.//
  },
  {
    path: 'admintest', 
    loadChildren: () => import('./admintest/admintest.module').then(m => m.AdmintestModule) 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
