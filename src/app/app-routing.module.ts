import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', redirectTo: '/my-expenses', pathMatch: 'full' },
  {path: 'my-expenses', component: ExpensesComponent },
  {path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
