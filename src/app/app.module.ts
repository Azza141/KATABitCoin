import { SearchPipe } from './search.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoinService } from './service/coin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginationService } from './service/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyDetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, CoinService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
