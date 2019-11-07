import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'' ,redirectTo:'home' ,pathMatch:'full' } ,
  { path:'home' ,component:HomeComponent },
  { path:'services',component:ServicesComponent },
  { path:'products' ,component:ProductsComponent },
  { path:'career' ,component:CareerComponent },
  { path:'contact-us' ,component:ContactUsComponent },
  { path:'about-us' ,component:AboutUsComponent },
  { path:'**' ,redirectTo:'home' ,pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
