import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CurrencyListComponent },
      { path: 'currency/:id', component: CurrencyDetailComponent }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
