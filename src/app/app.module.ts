import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NewExpenseComponent } from './expenses/new-expense/new-expense.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpenseItemComponent } from './expenses/expenses-list/expense-item/expense-item.component';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from './expenses/expense.service';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    NewExpenseComponent,
    ExpensesListComponent,
    ExpenseItemComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
