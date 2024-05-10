import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommunityComponent } from './components/community/community.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CommunitycardsComponent } from './components/communitycards/communitycards.component';

const routes: Routes = [
  // {
  //   path: 'auth', 
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  // },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  {
    path: '',
   component: HomepageComponent 
  },
  {
    path: 'blogs',
   component: BlogsComponent 
  },
  {
    path: 'community',
    component: CommunityComponent 
  },
  {
    path: 'community',
    children:[
    {
      path:'communitycard',
      component: CommunitycardsComponent,
    },
   ] 
  },
  { 
    path: '**', 
    component: PagenotfoundComponent // Wildcard route for a 404 page
  }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
