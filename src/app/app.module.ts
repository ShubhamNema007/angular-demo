import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CommunityComponent } from './components/community/community.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthModule } from './auth/auth.module';
import { CommunitycardsComponent } from './components/communitycards/communitycards.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    PagenotfoundComponent,
    CommunityComponent,
    HomepageComponent,
    CommunitycardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
