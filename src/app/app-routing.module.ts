import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  //add comma with new component
  { path: 'home-component', component: HomeComponent },
  { path: 'header-component', component: HeaderComponent},
  { path: 'footer-component', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
