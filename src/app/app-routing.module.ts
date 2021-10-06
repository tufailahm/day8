import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'empDetails', component: EmployeeDetailComponent },
  { path: 'addProduct', component: AddProductComponent },
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
