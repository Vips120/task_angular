import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
   path:'',
   component:ProductsComponent,
   data:{
     url:"invest"
   }
  },
  
  {
  path:'home',
  component:HomeComponent,
  data:{
    url:"home"
  }
},
{
  path:'invest',
  component:ProductsComponent,
  data:{
    url:"invest"
  }
},
{
  path:'portfolio',
  component: PortfolioComponent,
  data:{
    url:"portfolio"
  }
},
{
  path:'profile',
  component:ProfileComponent,
  data:{
    url:"profile"
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
