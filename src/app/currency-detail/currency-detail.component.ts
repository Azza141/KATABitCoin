import { Router, ActivatedRoute } from '@angular/router';
import { CoinService } from './../service/coin.service';
import { Coin } from './../model/coin';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit {
  public coin: Coin;
  constructor(public coinService: CoinService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.coinService.getCoinsById(params.get("id")).subscribe((data: Coin) => this.coin = data);
    });
  }

  backClicked() {
    this._location.back();
  }

}
