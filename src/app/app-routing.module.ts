import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from '../app/add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: AddComponent },
  { path: 'view', component: ViewComponent }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
 
}
)
export class AppRoutingModule { }
