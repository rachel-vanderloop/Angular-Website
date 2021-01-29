import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  //add comma with new component
  { path: 'home-component', component: HomeComponent },
  { path: 'header-component', component: HeaderComponent},
  { path: 'footer-component', component: FooterComponent},
  { path: 'resume-component', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
