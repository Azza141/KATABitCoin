import { PaginationService } from './../service/pagination.service';
import { CoinService } from './../service/coin.service';
import { Coin } from './../model/coin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  pager: any = {};
  pagedItems: any[];
  query: string;
  filter: string;
  public coins: Array<Coin> = [];
  constructor(private coinService: CoinService, private router: Router, private paginationService: PaginationService) {
  }

  ngOnInit() {
    this.coinService.getCoins().subscribe((data: Array<Coin>) => {
      this.coins = data;
      this.setPage(1);
    });
    this.filter = 'name';
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.paginationService.getPager(this.coins.length, page);

    // get current page of items
    this.pagedItems = this.coins.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onSearch(term: string) {
    this.router.navigate(['currency', term]);
  }
}
