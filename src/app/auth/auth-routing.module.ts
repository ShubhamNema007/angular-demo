import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full' //it's like telling the router to look at the entire web address (URL) to decide if it's the right page.//
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  {
    path: 'forgotpassword', 
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) 
  },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) 
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }